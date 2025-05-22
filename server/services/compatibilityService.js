const UserPreferences = require('../models/UserPreferences');

const calculateCompatibilityScore = (userPrefs1, userPrefs2) => {
  let score = 0;
  let maxScore = 0;

  // Lifestyle compatibility (40% weight)
  if (userPrefs1.lifestyle && userPrefs2.lifestyle) {
    // Sleep schedule
    if (userPrefs1.lifestyle.sleepSchedule === userPrefs2.lifestyle.sleepSchedule) {
      score += 10;
    } else if (userPrefs1.lifestyle.sleepSchedule === 'flexible' || 
               userPrefs2.lifestyle.sleepSchedule === 'flexible') {
      score += 5;
    }
    maxScore += 10;

    // Cleanliness
    const cleanlinessMatch = 5 - Math.abs(userPrefs1.lifestyle.cleanliness - userPrefs2.lifestyle.cleanliness);
    score += cleanlinessMatch * 2;
    maxScore += 10;

    // Smoking and drinking
    if (userPrefs1.lifestyle.smoking === userPrefs2.lifestyle.smoking) score += 5;
    if (userPrefs1.lifestyle.drinking === userPrefs2.lifestyle.drinking) score += 5;
    maxScore += 10;

    // Guest preferences
    if (userPrefs1.lifestyle.guests === userPrefs2.lifestyle.guests) {
      score += 10;
    } else if (Math.abs(['never', 'occasionally', 'frequently'].indexOf(userPrefs1.lifestyle.guests) -
               ['never', 'occasionally', 'frequently'].indexOf(userPrefs2.lifestyle.guests)) === 1) {
      score += 5;
    }
    maxScore += 10;
  }

  // Interests match (30% weight)
  if (userPrefs1.interests && userPrefs2.interests) {
    const commonInterests = userPrefs1.interests.filter(interest => 
      userPrefs2.interests.includes(interest)
    );
    score += (commonInterests.length / Math.max(userPrefs1.interests.length, userPrefs2.interests.length)) * 30;
    maxScore += 30;
  }

  // Language match (15% weight)
  if (userPrefs1.languages && userPrefs2.languages) {
    const commonLanguages = userPrefs1.languages.filter(lang => 
      userPrefs2.languages.includes(lang)
    );
    score += (commonLanguages.length / Math.max(userPrefs1.languages.length, userPrefs2.languages.length)) * 15;
    maxScore += 15;
  }

  // Age range compatibility (15% weight)
  if (userPrefs1.ageRange && userPrefs2.ageRange) {
    const ageRangeOverlap = Math.min(userPrefs1.ageRange.max, userPrefs2.ageRange.max) - 
                           Math.max(userPrefs1.ageRange.min, userPrefs2.ageRange.min);
    if (ageRangeOverlap > 0) {
      score += 15 * (ageRangeOverlap / Math.max(
        userPrefs1.ageRange.max - userPrefs1.ageRange.min,
        userPrefs2.ageRange.max - userPrefs2.ageRange.min
      ));
    }
    maxScore += 15;
  }

  return maxScore > 0 ? (score / maxScore) * 100 : 0;
};

const findCompatibleRoommates = async (userId, minScore = 70) => {
  const userPrefs = await UserPreferences.findOne({ userId });
  if (!userPrefs) throw new Error('User preferences not found');

  const allPreferences = await UserPreferences.find({ userId: { $ne: userId } });
  
  const compatibilityScores = allPreferences.map(prefs => ({
    userId: prefs.userId,
    score: calculateCompatibilityScore(userPrefs, prefs)
  }));

  return compatibilityScores
    .filter(match => match.score >= minScore)
    .sort((a, b) => b.score - a.score);
};

module.exports = {
  calculateCompatibilityScore,
  findCompatibleRoommates
};
const mongoose = require('mongoose');

const userPreferencesSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  lifestyle: {
    sleepSchedule: { type: String, enum: ['early', 'late', 'flexible'] },
    cleanliness: { type: Number, min: 1, max: 5 },
    smoking: { type: Boolean, default: false },
    drinking: { type: Boolean, default: false },
    guests: { type: String, enum: ['never', 'occasionally', 'frequently'] }
  },
  interests: [String],
  occupation: String,
  ageRange: {
    min: { type: Number, min: 18 },
    max: { type: Number }
  },
  languages: [String],
  dietaryPreferences: [String],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserPreferences', userPreferencesSchema);
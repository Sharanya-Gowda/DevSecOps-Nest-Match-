import React, { useState } from 'react';
import { Users, Clock, Coffee, Music, Book, Heart } from 'lucide-react';

interface MatchedRoommate {
  id: string;
  name: string;
  age: number;
  occupation: string;
  compatibility: number;
  interests: string[];
  image: string;
}

const RoommateMatchPage = () => {
  const [preferences, setPreferences] = useState({
    ageRange: { min: 18, max: 35 },
    lifestyle: {
      sleepSchedule: 'early',
      cleanliness: 5,
      smoking: false,
      drinking: false,
      guests: 'occasionally'
    },
    interests: [] as string[],
    occupation: '',
    languages: [] as string[]
  });

  // Dummy data for matched roommates
  const [matchedRoommates] = useState<MatchedRoommate[]>([
    {
      id: '1',
      name: 'Priya Sharma',
      age: 24,
      occupation: 'Software Engineer',
      compatibility: 95,
      interests: ['Reading', 'Music', 'Travel'],
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg'
    },
    {
      id: '2',
      name: 'Rahul Verma',
      age: 26,
      occupation: 'Data Analyst',
      compatibility: 88,
      interests: ['Sports', 'Cooking', 'Photography'],
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    {
      id: '3',
      name: 'Neha Singh',
      age: 23,
      occupation: 'Marketing Executive',
      compatibility: 82,
      interests: ['Yoga', 'Painting', 'Movies'],
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    }
  ]);

  const interestsList = [
    'Reading', 'Music', 'Travel', 'Sports', 'Cooking',
    'Photography', 'Gaming', 'Art', 'Movies', 'Fitness'
  ];

  const languagesList = [
    'English', 'Hindi', 'Tamil', 'Telugu', 'Kannada',
    'Malayalam', 'Bengali', 'Marathi', 'Gujarati', 'Punjabi'
  ];

  const handleInterestToggle = (interest: string) => {
    setPreferences(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleLanguageToggle = (language: string) => {
    setPreferences(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(l => l !== language)
        : [...prev.languages, language]
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Find Compatible Roommates</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Preferences Form */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Your Preferences</h2>

            {/* Age Range */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age Range
              </label>
              <div className="flex space-x-4">
                <input
                  type="number"
                  value={preferences.ageRange.min}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev,
                    ageRange: { ...prev.ageRange, min: parseInt(e.target.value) }
                  }))}
                  className="w-24 px-3 py-2 border rounded-md"
                  min="18"
                  max="100"
                />
                <span className="self-center">to</span>
                <input
                  type="number"
                  value={preferences.ageRange.max}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev,
                    ageRange: { ...prev.ageRange, max: parseInt(e.target.value) }
                  }))}
                  className="w-24 px-3 py-2 border rounded-md"
                  min="18"
                  max="100"
                />
              </div>
            </div>

            {/* Lifestyle */}
            <div className="mb-4">
              <h3 className="font-medium text-gray-900 mb-2">Lifestyle</h3>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Sleep Schedule
                  </label>
                  <select
                    value={preferences.lifestyle.sleepSchedule}
                    onChange={(e) => setPreferences(prev => ({
                      ...prev,
                      lifestyle: { ...prev.lifestyle, sleepSchedule: e.target.value }
                    }))}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="early">Early Bird</option>
                    <option value="late">Night Owl</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Cleanliness (1-5)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={preferences.lifestyle.cleanliness}
                    onChange={(e) => setPreferences(prev => ({
                      ...prev,
                      lifestyle: { ...prev.lifestyle, cleanliness: parseInt(e.target.value) }
                    }))}
                    className="w-full"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.lifestyle.smoking}
                    onChange={(e) => setPreferences(prev => ({
                      ...prev,
                      lifestyle: { ...prev.lifestyle, smoking: e.target.checked }
                    }))}
                    className="rounded text-purple-600"
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    Smoking Friendly
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.lifestyle.drinking}
                    onChange={(e) => setPreferences(prev => ({
                      ...prev,
                      lifestyle: { ...prev.lifestyle, drinking: e.target.checked }
                    }))}
                    className="rounded text-purple-600"
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    Drinking Friendly
                  </label>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Guest Policy
                  </label>
                  <select
                    value={preferences.lifestyle.guests}
                    onChange={(e) => setPreferences(prev => ({
                      ...prev,
                      lifestyle: { ...prev.lifestyle, guests: e.target.value }
                    }))}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="never">No Guests</option>
                    <option value="occasionally">Occasionally</option>
                    <option value="frequently">Frequently</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="mb-4">
              <h3 className="font-medium text-gray-900 mb-2">Interests</h3>
              <div className="grid grid-cols-2 gap-2">
                {interestsList.map(interest => (
                  <label key={interest} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={preferences.interests.includes(interest)}
                      onChange={() => handleInterestToggle(interest)}
                      className="rounded text-purple-600"
                    />
                    <span className="text-sm">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Languages</h3>
              <div className="grid grid-cols-2 gap-2">
                {languagesList.map(language => (
                  <label key={language} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={preferences.languages.includes(language)}
                      onChange={() => handleLanguageToggle(language)}
                      className="rounded text-purple-600"
                    />
                    <span className="text-sm">{language}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Matched Roommates */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">Compatible Roommates</h2>
              
              <div className="space-y-6">
                {matchedRoommates.map(roommate => (
                  <div
                    key={roommate.id}
                    className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <img
                      src={roommate.image}
                      alt={roommate.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">{roommate.name}</h3>
                          <p className="text-gray-600">{roommate.age} years • {roommate.occupation}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-700">
                            {roommate.compatibility}%
                          </div>
                          <div className="text-sm text-gray-500">match</div>
                        </div>
                      </div>
                      
                      <div className="mt-2">
                        <div className="flex flex-wrap gap-2">
                          {roommate.interests.map(interest => (
                            <span
                              key={interest}
                              className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 flex space-x-4">
                        <button className="text-purple-700 hover:text-purple-900 text-sm font-medium">
                          View Profile
                        </button>
                        <button className="text-purple-700 hover:text-purple-900 text-sm font-medium">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoommateMatchPage;
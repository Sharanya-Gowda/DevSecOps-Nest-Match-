const express = require('express');
const router = express.Router();
const User = require('../models/User');
const UserPreferences = require('../models/UserPreferences');
const auth = require('../middleware/auth');
const { findCompatibleRoommates } = require('../services/compatibilityService');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');

// Configure Google OAuth
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/users/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ email: profile.emails[0].value });
      
      if (!user) {
        user = await User.create({
          email: profile.emails[0].value,
          name: profile.displayName,
          profileImage: profile.photos[0].value
        });
      }
      
      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  }
));

// User preferences endpoints
router.post('/preferences', auth, async (req, res) => {
  try {
    const preferences = await UserPreferences.findOneAndUpdate(
      { userId: req.user._id },
      { ...req.body, updated_at: Date.now() },
      { new: true, upsert: true }
    );
    res.json(preferences);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/preferences', auth, async (req, res) => {
  try {
    const preferences = await UserPreferences.findOne({ userId: req.user._id });
    res.json(preferences || {});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Compatibility endpoints
router.get('/compatible-roommates', auth, async (req, res) => {
  try {
    const minScore = Number(req.query.minScore) || 70;
    const matches = await findCompatibleRoommates(req.user._id, minScore);
    res.json(matches);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// OAuth routes
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/auth/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const token = jwt.sign(
      { userId: req.user._id, role: req.user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.redirect(`/auth/callback?token=${token}`);
  }
);

// Profile management
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/profile', auth, async (req, res) => {
  try {
    const updates = {
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      updated_at: Date.now()
    };

    const user = await User.findByIdAndUpdate(
      req.user._id,
      updates,
      { new: true }
    ).select('-password');

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
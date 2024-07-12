
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const db = require("../db/models");


const strategy = new FacebookStrategy({
  clientID: 975886324292768,
  clientSecret: "5ac3a7f933c7ac8a44094cd5d9bc6259",
  callbackURL: "http://localhost:3030/authentication/facebook/callback",
  profileFields: ["id", "emails", "name", "photos"] 
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const [user, created] = await db.User.findOrCreate({
      where: { socialId: profile.id },
      defaults: {
        socialId: profile.id,
        provider: 'facebook',
        name: profile.name.givenName,
        surname: profile.name.familyName,

      }
    });
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
});

// Export the Passport configuration
const configServiceLogInFacebook = () => {
  passport.use(strategy);
};

module.exports = {
  configServiceLogInFacebook
};


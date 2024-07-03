const Strategy = require("passport-google-oauth").OAuth2Strategy;
const passport = require("passport");

const clientID ="550919172697-832fpeh4csgn82b2jimfsl2f55b8p3mb.apps.googleusercontent.com"
const clientSecret = "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"
const callbackURL = "http://localhost:3030/iniciar/authentication/google/callback"

console.log(clientID,clientSecret,callbackURL)

const strategy = new Strategy({
  clientID,
  clientSecret,
  callbackURL,
  scope: ["profile", "email"]
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile)
})

const configServiceLogInGoogle = () => passport.use(strategy)


module.exports = {
  configServiceLogInGoogle
}
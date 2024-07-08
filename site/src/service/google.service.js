const Strategy = require("passport-google-oauth").OAuth2Strategy;
const passport = require("passport");

const clientID =process.env['GOOGLE_CLIENT_ID']
const clientSecret = process.env['GOOGLE_SECRET_ID']
const callbackURL = process.env['GOOGLE_CALLBACK']

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
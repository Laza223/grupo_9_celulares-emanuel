const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");

const { login, procesoIniciar, logout, register, registerProcess, loginAndRegister, loginAndRegisterGoogle, loginAndRegisterFacebook } = require("../controllers/authentication");
const { registerValidation, loginValidation } = require("../middlewares/validations");

const passport = require("passport");


router.get("/", loginAndRegister);

router.post("/registrar", registerValidation, registerProcess);

router.post("/iniciar", loginValidation, procesoIniciar);

router.get("/cerrar-sesion", logout)


passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// LOGIN GOOGLE
router.get("/iniciar/google", passport.authenticate("google"));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  loginAndRegisterGoogle
);

// Login y Register Facebook

router.get("/facebook", passport.authenticate("facebook", { scope: ["email"] }));
router.get("/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/" }), loginAndRegisterFacebook);

module.exports = router;


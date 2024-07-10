const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");

const { login, procesoIniciar, logout, register, registerProcess,loginAndRegister,loginAndRegisterGoogle} = require("../controllers/authentication");
const { registerValidation, loginValidation } = require("../middlewares/validations");

const passport = require("passport");


router.get("/", loginAndRegister); 

router.post("/registrar", registerValidation, registerProcess );

router.post("/iniciar", loginValidation ,procesoIniciar); 

router.get("/cerrar-sesion", logout)


passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// LOGIN GOOGLE
router.get("/iniciar/google", passport.authenticate("google"));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/authentication/iniciar" }),
  loginAndRegisterGoogle
);


module.exports = router;


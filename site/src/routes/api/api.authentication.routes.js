const express = require("express");
const router = express.Router();
const {checkAdmin, login} = require("../../controllers/api/authentication")


// /api/auth

// RUTAS AUTHENTICATION
router.post("/login", login)

// Admin verify
router.post('/admin-verify', checkAdmin)

module.exports = router
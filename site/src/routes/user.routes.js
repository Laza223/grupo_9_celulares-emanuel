const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
<<<<<<< HEAD
const {uploadUser} = require("../middlewares/uploads")
const {fieldName, fieldSurname, fieldPhoneNumber} = require("../middlewares/validations/editUser.validation")
=======
const {uploadUser} = require("../middlewares/uploads");
const { profileValidation } = require("../middlewares/validations/profile.validation");
>>>>>>> 40fd05b4d5fd6da8eb82be2c7a7a3d182f073951

// /perfil

router.get("/", userController.profile)


router.get("/editar", userController.edit)
<<<<<<< HEAD
router.put("/editar", uploadUser.single("avatar", {name : "avatar"}), fieldName, fieldSurname, fieldPhoneNumber,userController.update)
=======
router.put("/editar",
     uploadUser.single("avatar", {name : "avatar"}),
     profileValidation, 
     userController.update)
>>>>>>> 40fd05b4d5fd6da8eb82be2c7a7a3d182f073951




module.exports = router
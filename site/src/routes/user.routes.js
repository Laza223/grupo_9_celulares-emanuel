const express = require("express");
const router = express.Router();
const {profile, edit, update, addFavorite, destroyFavorite} = require("../controllers/user");
const { uploadUser } = require("../middlewares/uploads");
const { profileValidation } = require("../middlewares/validations/profile.validation");


// /perfil

router.get("/", profile)


router.get("/editar", edit)
router.put("/editar",
     uploadUser.single("avatar", { name: "avatar" }),
     profileValidation,
     update)
router.post("/agregar-favorito/:id", addFavorite)
router.delete("/remover-favorito/:id", destroyFavorite)



module.exports = router
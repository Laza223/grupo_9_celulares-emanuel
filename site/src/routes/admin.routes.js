const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const { uploadProducts } = require("../middlewares/uploads");
const checkAdmin = require("../middlewares/checkAdmin");
const {productsValidation} = require("../middlewares/validations")



// "/admin"

router.get("/dashboard/productos", checkAdmin, adminController.list); 

router.get("/dashboard/usuarios", checkAdmin, adminController.userList);
router.get("/dashboard/usuarios/:id", checkAdmin, adminController.userDetail)
router.put("/dashboard/usuarios/:id", checkAdmin, adminController.userEdit)

router.get("/dashboard/editar/:id", checkAdmin, adminController.edit);
router.put("/dashboard/editar/:id", checkAdmin, uploadProducts.single( "imageProduct"), productsValidation,  adminController.update)

router.get("/dashboard/crear", checkAdmin, adminController.create);
router.post("/dashboard/crear", checkAdmin, uploadProducts.single( "imageProduct"), productsValidation, adminController.store);

/* router.get("/dashboard/eliminar/:id", checkAdmin, adminController.delete); */
router.delete("/dashboard/eliminar/:id", checkAdmin, adminController.destroy);

router.put("/dashboard/restaurar/:id", checkAdmin, adminController.restore)







module.exports = router;
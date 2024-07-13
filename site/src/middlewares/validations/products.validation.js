const { check, body } = require("express-validator");
const { Category } = require("../../db/models");
const path = require("path");
const regExpFiles = /\.(jpg|jpeg|png)$/i; 

const fieldTitle = check('name')
    .notEmpty()
    .withMessage("El título es requerido")
    .bail()
    .isLength({ min: 5, max: 100 })
    .withMessage("El titulo debe tener un minimo de 5 caracteres");
    

const fieldPrice = body("price")
    .notEmpty()
    .withMessage("El precio es requerido")
    .bail()
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .bail()
    .isDecimal()
    .withMessage("El precio debe ser un número decimal")
    .bail()
    .isLength({ min: 1, max: 12 })
    .withMessage("El precio debe tener un minimo de 1 y un máximo de 12 dígitos ");

const fieldStock = body("stock")
    .notEmpty()
    .withMessage("El stock es requerido")
    .bail()
    .isNumeric()
    .withMessage("El stock debe ser un número")
    .bail()
    .isDecimal()
    .withMessage("El stock debe ser un número decimal")
    .bail()
    .isLength({ min: 1, max: 12 })
    .withMessage("El stock debe tener un minimo de 1 y un máximo de 12 dígitos ");

const fieldDescription = body("description")
    .notEmpty()
    .withMessage("La descripción es requerida")
    .bail()
    .isLength({ min: 30, max: 1000 })
    .withMessage("La descripción debe tener entre 30 y 1000 caracteres");

const fieldCategory = body("category")
    .notEmpty()
    .withMessage("Debe seleccionar una categoría")
    .bail()
    .custom(async (value) => {
        const category = await Category.findByPk(value);
        if (!category) {
            throw new Error("La categoría seleccionada no existe");
        }
    });

const fieldFile = body("imageProduct").custom(
    (value, { req }) => {
        const lengthImage = req.file?.imageProduct?.length;

        if (lengthImage) {
            if (lengthImage > 1) {
                throw new Error("No puedes ingresar más de 1 archivo");
            }

            const extFile = path.extname(req.file.imageProduct[0].originalname);
            const isFormatSuccess = regExpFiles.test(extFile);

            if (!isFormatSuccess) {
                throw new Error("El formato de la imagen principal es inválido");
            }
        }
        return true;
    }
);

module.exports = {
    productsValidation: [
        fieldTitle,
        fieldPrice,
        fieldStock,
        fieldDescription,
        fieldCategory,
        fieldFile
    ]
};

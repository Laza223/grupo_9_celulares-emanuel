const path = require("path");
const { body } = require("express-validator");
const db = require("../../db/models");


    const fieldName = body("name")
        .notEmpty().withMessage("Campo requerido").bail()
        .withMessage("El Nombre es requerido").bail()
        .isLength({ min: 3, max: 50 }).withMessage("Debe tener un minimo de 3 caracteres!").bail()

    const fieldSurname = body("surname")
        .notEmpty().withMessage("Campo requerido").bail()
        .withMessage("El Apellido es requerido").bail()
        .isLength({ min: 3, max: 50 }).withMessage("Debe tener un minimo de 3 caracteres!").bail()

    const fieldPhoneNumber = body("phoneNumber")
        .notEmpty().withMessage("Campo requerido").bail()
        .withMessage("El campo Telefono es requerido!").bail()
        .isLength({ min: 9, max: 15 }).withMessage("Debe tener un minimo de 9 o máximo de 15 caracteres!").bail()
        .isNumeric().withMessage("Debe ser un numero").bail()
module.exports = {
    editUser : [fieldName, fieldSurname, fieldPhoneNumber]
}

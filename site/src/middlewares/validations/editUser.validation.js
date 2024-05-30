const path = require('path')
const { body } = require("express-validator");
const db = require("../../db/models")


const fieldName = body("name")
    .notEmpty().withMessage("Campo requerido").bail()
    .withMessage("El campo Nombre es requerido!").bail()
    .isLength({ min: 3, max: 50 }).withMessage("Debe tener un minimo de 3 caracteres!").bail()

const fieldSurname = body("surname")
    .notEmpty().withMessage("Campo requerido").bail()
    .withMessage("El campo Apellido es requerido!").bail()
    .isLength({ min: 3, max: 50 }).withMessage("Debe tener un minimo de 3 caracteres!").bail()

const fieldPhoneNumber = body("phoneNumber")
    .notEmpty().withMessage("Campo requerido").bail()
    .withMessage("El campo Telefono es requerido!").bail()
    .isLength({ min: 9, max: 15 }).withMessage("Debe tener un minimo de 10 caracteres!").bail()

module.exports =  [fieldName, fieldSurname, fieldPhoneNumber]
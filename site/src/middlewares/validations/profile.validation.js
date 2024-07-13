const { body } = require("express-validator");

const fieldName = body("name")
    .notEmpty().withMessage("El campo Nombre es requerido.")
    .isLength({ min: 3, max: 50 }).withMessage("El campo Nombre debe tener entre 3 y 50 caracteres.");

const fieldSurname = body("surname")
    .notEmpty().withMessage("El campo Apellido es requerido.")
    .isLength({ min: 3, max: 50 }).withMessage("El campo Apellido debe tener entre 3 y 50 caracteres.");

const fieldPhoneNumber = body("phoneNumber")
    .notEmpty().withMessage("El campo Teléfono es requerido.")
    .isLength({ min: 9, max: 15 }).withMessage("El campo Teléfono debe tener entre 9 y 15 caracteres.");

module.exports = {
    profileValidation: [fieldName, fieldSurname, fieldPhoneNumber]
};

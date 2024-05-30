const { body } = require("express-validator");
const path = require('path');
const db = require('../../db/models');



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
    .custom(async (value, { req }) => {
        try {
            const userFind = await db.User.findAll({
                where: { phoneNumber: value.trim() }
            })
            if (userFind.length) {
                if (userFind[0].phoneNumber === value) {
                    throw new Error("Ya existe un usuario registrado con ese Telefono!")
                }
            }
        } catch (error) {
            throw error
        }
    })


module.exports = {
    editValidation: [fieldName, fieldSurname, fieldPhoneNumber]
}
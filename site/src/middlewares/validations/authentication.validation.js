const db = require('../../db/models')
const { body } = require("express-validator");
const { compareSync } = require('bcryptjs')
const path = require('path')
const regExPass = /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
const expReg = /.png|.jpg|.jpeg|.webp|.gif/i;




const fieldName = body("name")
    .notEmpty().withMessage("Campo requerido").bail()
    .withMessage("El campo Nombre es requerido!").bail()
    .isLength({ min: 3, max: 50 }).withMessage("Debe tener un minimo de 3 caracteres!").bail()

const fieldSurname = body("surname")
    .notEmpty().withMessage("Campo requerido").bail()
    .withMessage("El campo Apellido es requerido!").bail()
    .isLength({ min: 3, max: 50 }).withMessage("Debe tener un minimo de 3 caracteres!").bail()

const fieldEmail = body("email")
    .notEmpty().withMessage("Campo requerido").bail()
    .isEmail().withMessage("Formato invalido").bail()
    .custom(async (value, { req }) => {
        try {
            const userFind = await db.User.findAll({
                where: { email: value.trim() }
            })
            if (userFind.length) {
                if (userFind[0].email === value) {
                    throw new Error("Ya existe un usuario registrado con ese email!!!")
                }
                }
            }catch (error) {
                throw error
            }
        }
    )

const fieldPassword = body("password")
    .notEmpty().withMessage("Campo requerido").bail()
    .withMessage("El campo contraseña es requerido!").bail()
    .isLength({ min: 8, max: 16 })
    .withMessage("Longitud invalida!").bail()
    .matches(regExPass).withMessage("Contraseña debe contener al menos una mayuscula una minuscula y un  numero!").bail()


// VALIDACION LOGIN //

const loginEmail = body("emailLogin")
    .notEmpty().withMessage("Campo requerido").bail()
    .isEmail().withMessage("Formato invalido").bail()
    .custom(async (value, { req }) => {
        try {
            const userFind = await db.User.findAll({
                where: { email: value.trim() }
            })
            if (!userFind.length) {
                throw new Error("El email ingresado no está registrado!")
            }
        } catch (error) {
            throw error
        }
    });

const loginPassword = body("passwordLogin")
    .notEmpty().withMessage("Campo requerido").withMessage("El campo contraseña es requerido!").bail()
    .isLength({ min: 8, max: 16 }).withMessage("Longitud invalida!").bail()
    .matches(regExPass).withMessage("Credenciales invalidas").bail()
    .custom(async (value, { req }) => {
        try {
            const { emailLogin } = req.body;
            const userFind = await db.User.findAll({
                where: { email: emailLogin }
            })
            
            if(userFind.length > 0) {
                const isValidPassword = compareSync(value, userFind[0].password)
                if (!isValidPassword) {
                    throw new Error("Credenciales inválidas");
                }
            }

        } catch (error) {
            throw error
        }
    });



module.exports = {
    registerValidation: [fieldName, fieldSurname, fieldEmail, fieldPassword],
    loginValidation: [loginEmail, loginPassword]
}
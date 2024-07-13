const db = require("../../db/models")
const bcrypt = require("bcryptjs");
const { validationResult, fileValidationError } = require("express-validator")

module.exports = async (req, res) => {

  const errors = validationResult(req);

  const categories = await db.Category.findAll();


  if (errors.isEmpty()) {
    const { name, surname, email, password } = req.body;

    await db.User.create({
      name: name.trim(),
      surname: surname.trim(),
      email: email.trim(),
      password: bcrypt.hashSync(password.trim(), 12),
      avatar: "avatar-default.png",
      roleId: 1
    })

    const registerMsg = "Registrado Exitoso!"
    console.log(registerMsg);

    const successRegister = {
      msg: "true"
    }

    
    return res.render("authentication/authentication", {registerMsg, successRegister})
  } else {
    console.log(req.body);
    return res.render("authentication/authentication", { 
      old: req.body,
      errors: errors.mapped() 
    })
  }

};
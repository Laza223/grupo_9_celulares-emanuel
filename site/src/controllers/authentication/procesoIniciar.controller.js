const db = require("../../db/models")
const bcrypt = require("bcryptjs");
const { validationResult, fileValidationError } = require("express-validator");
const jwt = require("json-web-token")

module.exports = async (req, res) => {
  
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    
    const userFind = await db.User.findOne({
      where: { email: req.body.emailLogin.toLowerCase() },
      attributes: {
        exclude: ['password']
      },
      include: "address"
    })

    const { id, name, surname, email, avatar, address, roleId } = userFind
    
    let roleAdmin = false

    if(roleId === 2) {
      roleAdmin = true
    }

     /* const token = jwt.sign({},"",{}); */

    req.session.userLogin = {
      id,
      name,
      surname,
      email,
      avatar,
      address,
      roleAdmin,
      token: "adsjkhbashbjkdasjkhbdashbjkadsadhbjksdjhbkasdkjashbdbashjkdasjhkdbkajhsdbjkhasbjkdhasbjkhdbjakshbdjkhasbdjkhasbdkjabdkjabsdkjha"
    }

    return res.redirect("/")

  } else {
    
    const errorLogin = {
      msg: "true"
    }

    console.log(errorLogin);

    return res.render("authentication/authentication", { 
      old: req.body,
      errorsLogin: errors.mapped() ,
      errorLogin
    })
  }

};

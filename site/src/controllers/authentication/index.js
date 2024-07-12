const loginAndRegisterGoogleController = require("./loginAndRegisterGoogle.controller");

module.exports = {

  login: require("./login.controller"),
  procesoIniciar: require("./procesoIniciar.controller"),
  logout: require("./logout.controller"),
  register: require("./register.controller"),
  registerProcess: require("./registerProcess.controller"),
  loginAndRegister: require("./loginAndRegister.controller"),
  loginAndRegisterGoogle: require("./loginAndRegisterGoogle.controller"),
  loginAndRegisterFacebook: require("./lognAndRegisterFacebook.controller")
};

const db = require("../../db/models");

module.exports = async (req, res) => {

    try {


    const {
      user: { _json, provider },
    } = req.session.passport;
 
        const { user } = req.session.passport;
        req.session.userLogin = {
          id: user.id,
          name: user.name,
          surname: user.surname,
          avatar: user.avatar,
          role: "REGULAR"
        };
        res.cookie("userLogin", req.session.userLogin, { maxAge: 6000 * 30 });
        res.redirect("/");
      } catch (error) {
        res.json(error);
      }}

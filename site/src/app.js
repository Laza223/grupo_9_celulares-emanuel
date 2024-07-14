require("dotenv").config();
var createError = require('http-errors');
const cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require("passport")

const { configServiceLogInGoogle } = require("./service/google.service");
const { configServiceLogInFacebook } = require("./service/facebook.service");


const methodOverride = require('method-override');  //PUT Y DELETE HABILITADO
const insertDataLocals = require('./middlewares/insertDataLocals');
const insertDataLocalsMsgRegister = require('./middlewares/insertDataLocalsMsgRegister');
const partials = require("express-partials")
const session = require("express-session")
const bodyParser = require('body-parser')
require('dotenv').config()



const checkUser = require("./middlewares/checkUser")
const checkUserCookies  = require('./middlewares/checkUserCookies');

/* RUTAS */
const authRoutes = require("./routes/authentication.routes");
const userRoutes = require("./routes/user.routes");
const cartRoutes = require("./routes/cart.routes");
const homeRoutes = require("./routes/home.routes");
const productRoutes = require("./routes/products.routes");
const adminRoutes = require("./routes/admin.routes");
const apiRoutes = require("./routes/api/api.routes")
const cartApiRoutes = require("./routes/api/cart.api.routes")
const apiAuthRoutes = require("./routes/api/api.authentication.routes");
const { log } = require('console');

var app = express();
configServiceLogInGoogle();
configServiceLogInFacebook();


var app = express();

app.use(methodOverride('_method'));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(partials());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: "Palabra Secreta",
  resave: false, 
  saveUninitialized: false 
}));

app.use(passport.initialize())
app.use(passport.session())

app.use(checkUser)
app.use(checkUserCookies)
app.use(insertDataLocals)
app.use(insertDataLocalsMsgRegister)


/* CONFIGS */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



/* ENRUTADORES */
app.use("/", homeRoutes);
app.use("/authentication", authRoutes);
app.use("/perfil", userRoutes);
app.use("/carrito", cartRoutes);
app.use("/productos", productRoutes);
app.use("/admin", adminRoutes);
app.use("/api", apiRoutes);
app.use("/api/cart", cartApiRoutes)
app.use("/api/auth", apiAuthRoutes)


app.use((req,res, next) => {
  res.status(404).render("error")
})

/*  //catch 404 and forward to error handler
 app.use(function(err,req, res, next) {
  console.log("error",err);
  console.log("--------------------");
  console.log(req);
  console.log("--------------------");
  console.log(res);
  next(createError(404));
}); 

// error handler

   app.use(function(err, req, res, next) {
   // set locals, only providing error in development}
    console.log("error",err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
   
    // render the error page
   res.status(err.status || 500);
    res.render('error');
   });

 */

module.exports = app;

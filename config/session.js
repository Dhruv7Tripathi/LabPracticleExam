const session = require("express-session");

module.exports = session({
  secret: "mySecretKey",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false
  }
});
// const express = require("express");
// const router = express.Router();

// const {
//   login,
//   dashboard,
//   logout
// } = require("../controllers/authController");

// const isAuthenticated = require("../middleware/authMiddleware");

// router.post("/login", login);
// router.get("/dashboard", isAuthenticated, dashboard);
// router.get("/logout", logout);

// module.exports = router;
const express = require("express");
const router = express.Router();

const {
  login,
  dashboard,
  logout
} = require("../controllers/authController");

const isAuthenticated = require("../middleware/authMiddleware");

router.get("/login", (req, res) => {
  res.send(`
    <h2>Login Page</h2>
    <form method="POST" action="/login">
      <input name="username" placeholder="Username" />
      <br/><br/>
      <input name="password" type="password" placeholder="Password" />
      <br/><br/>
      <button type="submit">Login</button>
    </form>
  `);
});

router.post("/login", login);
router.get("/dashboard", isAuthenticated, dashboard);
router.get("/logout", logout);

module.exports = router;
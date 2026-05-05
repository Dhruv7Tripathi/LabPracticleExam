const express = require("express");
const router = express.Router();

const {
  login,
  dashboard,
  logout
} = require("../controllers/authController");

const isAuthenticated = require("../middleware/authMiddleware");

router.post("/login", login);
router.get("/dashboard", isAuthenticated, dashboard);
router.get("/logout", logout);

module.exports = router;
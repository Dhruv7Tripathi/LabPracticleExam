const express = require("express");
const sessionMiddleware = require("./config/session");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sessionMiddleware);
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});
app.use("/", authRoutes);

module.exports = app;

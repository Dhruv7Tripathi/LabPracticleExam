const USER = {
  username: "admin",
  password: "1234"
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    req.session.user = username;
    return res.send("Login Successful");
  }

  res.status(401).send("Invalid Credentials");
};

exports.dashboard = (req, res) => {
  res.send(`Welcome ${req.session.user} to dashboard`);
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Error logging out");
    }
    res.send("Logged out successfully");
  });
};
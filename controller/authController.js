const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email }).exec();

  if (!user) {
    return res.status(401).send("Unautherised access: No user found");
  }

  const passwordMatch = bcrypt.compare(password, user.password);

  if (passwordMatch) {
    var token = jwt.sign(
      { _id: user._Id, email: user.email, name: user.name, role: user.role },
      process.env.JWT_KEY
    );
    res
      .cookie("token", token, {
        maxAge: 1 * 60 * 60 * 1000,
        httpOnly: true,
      })
      .status(200)
      .json(user);
  } else {
    res.send("unautherised access : password not match");
  }
};

const verifyLogin = async (req, res) => {
  res.json(req.user);
};

module.exports = {
  Login,
  verifyLogin,
};

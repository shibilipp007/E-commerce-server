const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const getAllusers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

const getUser = async (req, res) => {
  const user = await User.findById(req.body.userId).exec();
  res.json(user);
};

const addUser = async (req, res) => {
  console.log(req.body);

  const { name, email, password } = req.body;
  const saltRounds = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    name,
    email,
    password: hash,
  });

  await user.save();
  res.json(user);
};

module.exports = {
  getAllusers,
  getUser,
  addUser,
};

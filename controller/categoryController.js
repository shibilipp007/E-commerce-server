const Category = require("../models/categoryModel");

const getAllcategory = async (req, res) => {
  await Category.find({});
  res.json(getAllcategory);
};

const getCatById = async (req, res) => {
  await Category.findById();
  res.json(getCatById);
};

const addCategory = async (req, res) => {
  const data = req.body;
  const category = new Category(data);
  await Category.save();
  res.json(category);
};

const deleteCategory = async (req, res) => {
  await Category.findByIdAndDelete();
  res.send("field deleted");
};

module.exports = {
  getAllcategory,
  getCatById,
  addCategory,
  deleteCategory,
};

const { Product } = require("../models/productModel");

const getAllPorducts = async (req, res) => {
  await Product.find({});
  res.json(getAllPorducts);
};

const getProductById = async (req, res) => {
  await Product.findById();
  res.json(getProductById);
};

const addProduct = async (req, res) => {
  const data = req.body;
  const product = new Product(data);
  await product.save();
  res.json(product);
};

const updateProduct = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.productId, req.body, {
    new: true,
  });
  res.json(updateProduct);
};

const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete();
  res.send("Deleted");
};

module.exports = {
  getAllPorducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};

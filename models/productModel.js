const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  Image: String,
  description: String,
  price: Number,
  categoryId: { type: mongoose.ObjectId, ref: "Category", required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = {
  Product,
};

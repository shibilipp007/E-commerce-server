require("dotenv").config();
const expres = require("express");
const app = expres();
const authRoutes = require("./routing/authRoutes");
const productRoutes = require("./routing/productRoutes");
const userRoutes = require("./routing/userRoutes");
const cartRoutes = require("./routing/cartRoutes");
const categoryRoutes = require("./routing/categoryRoutes");
const cors = require("cors");
const connectDB = require("./config/db");

const port = 3000;

app.use(cors());
app.use(expres.json());
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/cart", cartRoutes);
app.use("/category", categoryRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connectDB();
});

const router = require("express").Router();
const Product = require("../models/Product");
const { verifyToken, isAdmin } = require("../middleware/auth");

// ✅ GET all products (public)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 🔐 ADD product (ONLY ADMIN)
router.post("/", verifyToken, isAdmin, async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
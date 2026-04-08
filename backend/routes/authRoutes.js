const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

module.exports = {
  register,
  login
};

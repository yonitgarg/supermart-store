const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json("No token");

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json("Invalid token");

    req.user = user; // 🔥 yaha role bhi aayega
    next();
  });
};

const isAdmin = (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json("Admin only");
  }
};

module.exports = { verifyToken, isAdmin };
const jwt = require("jsonwebtoken");

// 🔐 VERIFY TOKEN
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json("No token provided");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 🔥 IMPORTANT
    req.user = decoded;

    next();
  } catch (err) {
    return res.status(403).json("Invalid token");
  }
};

// 🔐 ADMIN CHECK
const isAdmin = (req, res, next) => {
  console.log("USER FROM TOKEN:", req.user); // 👈 DEBUG

  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json("Admin only");
  }

  next();
};

module.exports = { verifyToken, isAdmin };
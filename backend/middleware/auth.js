const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json("No token provided");
  }

  // 🔥 TOKEN EXTRACT
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("DECODED USER:", decoded); // debug

    req.user = decoded;
    next();
  } catch (err) {
    console.log("VERIFY ERROR:", err);
    return res.status(403).json("Invalid token");
  }
};

module.exports = { verifyToken };
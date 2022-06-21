require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const adminAuth = (req, res, next) => {
  const usertoken = req.headers.cookie;
  if (usertoken) {
    const token = usertoken.split(" ");
    const newToken = token[1].split("=");
    const jwtToken = newToken[1].split(";");
    jwt.verify(jwtToken[0], jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      } else {
        if (decodedToken.role == "superUser" || decodedToken.role == "anciao" || decodedToken.role == "servo") {
          next();
        } else {
          return res
            .status(401)
            .json({ message: "Not authorized, token not available" });
        }
      }
    });
  } else {
    res.status(401).json({ message: "Not authorized, token not available" });
  }
};

module.exports = { adminAuth };
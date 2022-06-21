require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const userAuth = (req, res, next) => {
  const usertoken = req.body.token;
  delete req.body.token
  if (usertoken) {
    const token = usertoken.split("=");
    const newToken = token[1].split(" ");
    const jwtToken = newToken[0].split(";");

    jwt.verify(jwtToken[0], jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      } else {
          next();
      }
    });
  } else {
    res.status(401).json({ message: "Not authorized, token not available" });
  }
};

module.exports = { userAuth };
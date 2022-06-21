require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const superUserAuth = (req, res, next) => {
  const usertoken = req.headers.cookie;
  if (usertoken) {
    console.log('Recebido ' +token)
    const token = usertoken.split(" ");
    const newToken = token[1].split("=");
    const jwtToken = newToken[1].split(";");
    console.log('Ultimo split '+jwtToken)
    jwt.verify(jwtToken[0], jwtSecret, (err, decodedToken) => {
      console.log('decoded '+decodedToken)
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      } else {
        if (decodedToken.role == "superUser") {
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

module.exports = { superUserAuth };

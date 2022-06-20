require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const superUserAuth = (req, res, next) => {
  const usertoken = req.headers.cookie;
  if (usertoken) {
    console.log("entrou");
    const token = usertoken.split("=");
    const newToken = token[1].split(" ");
    const jwtToken = newToken[0].split(";");

    jwt.verify(jwtToken[0], jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      } else {
        console.log(decodedToken);
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

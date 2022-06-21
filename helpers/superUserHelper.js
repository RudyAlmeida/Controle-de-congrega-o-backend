require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const superUserAuth = (req, res, next) => {
  const usertoken = req.body.token;
  console.log(req.body.token)
  delete req.body.token
  if (usertoken) {
    // const token = usertoken.split(" ");
    //const newToken = usertoken.split("=");
    //const jwtToken = newToken[1].split(";");
    jwt.verify(usertoken[0], jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Cookie not valid" });
      } else {
        if (decodedToken.role == "superUser") {
          next();
        } else {
          return res
            .status(401)
            .json({ message: "Not authorized, user does not have autorization" });
        }
      }
    });
  } else {
    res.status(401).json({ message: "Not authorized, token not available" });
  }
};

module.exports = { superUserAuth };

const { searchByParam } = require('../bd/dbMethods');
const bcrypt = require("bcrypt");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const loginHelper = async(collection, user) => {
    return await new Promise((resolve, reject) => {searchByParam(collection, 'email', user.email).then((result) => {
  
    if(result){
        bcrypt.compare(user.password, result[0].password).then(function (response) {
          delete result[0].password;
          if (response) {
              const maxAge = 3 * 60 * 60;
            const token = jwt.sign(
              { ...result[0] },
              jwtSecret,
              {
                expiresIn: maxAge,
              }
            );
            let user = {
                user: result[0],
                token: token
            }
            resolve(user)
          } else {
              resolve(new Error("E-mail ou Senha não conferem"))
          }
        });
    }else{
        resolve(new Error("Usuario não encontrado"))
    }
})
})

}
module.exports = loginHelper

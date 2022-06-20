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
              { id: result[0]._id, username: result[0].name, role: result[0].role },
              jwtSecret,
              {
                expiresIn: maxAge,
              }
            );
            let user = {
                user: result[0],
                token: token
            }
            console.log(user)
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

const { createOne, getAll, getOne, updateOne, deleteOne, searchByParam } = require('../bd/dbMethods');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const collection = 'user'

const createUser = async (user) => {
    return new Promise((resolve, reject) => bcrypt.genSalt(saltRounds, async function (err, salt) {
        bcrypt.hash(user.password, salt, async function (err, hash) {
            user.password = hash;
            try{
                const result = await createOne(collection, user);
                resolve(result)
            }catch(error){
                reject(error)
            }
        });
    }));
}
const getAllUsers = async () => {
    try{
        const result = await getAll(collection)
        return result
    }catch(error){
        return error
    }
}
const getOneUser = async (_id) => {
    try{
        const result = await getOne(collection, _id)
        return result
    }catch(error){
        return error
    }
}
const updateUser = async (user) => {
    const _id = user._id;
    delete user._id;
    try{
        const result = await updateOne(collection, _id, user)
        return result
    }catch(error){
        return error
    }
}
const deleteUser = async (_id) => {
    try{
        const result = await deleteOne(collection, _id)
        return result
    }catch(error){
        return error
    }
}
const getUsersByCongregation = async (_id) => {
    try{
        const result = await searchByParam(collection, 'congregationId', _id)
        return result
    }catch(error){
        return error
    }
}

module.exports = { createUser, getOneUser, updateUser, getAllUsers, deleteUser, getUsersByCongregation }

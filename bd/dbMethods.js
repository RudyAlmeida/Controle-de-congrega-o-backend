const client = require('../helpers/conn');
const dbo = client.db("controle-de-congregacoes");
const { ObjectId } = require("bson");
const { reject } = require('bcrypt/promises');


const createOne = async (collection, item) => {
        return await new Promise((resolve, reject) => {dbo.collection(collection).insertOne(item).then((result) => {
            return result
        }).then((result) => {
            resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        }).catch((error)=>{
            resolve(new Error(error))
        })
     }) 
}
const createMany = async (collection, item) => {
    return await new Promise((resolve, reject) => {dbo.collection(collection).insertMany(item, (error, result) => {
        if (error) resolve(error);
        resolve(result);
    });
 })
}
const getAll = async (collection) => {
    return await new Promise((resolve, reject) => {dbo.collection(collection).find({}).toArray((error, result) => {
        if (error) resolve(error);
        resolve(result);
    });
 })
}
const getOne = async (collection, _id) => {
    return await new Promise((resolve, reject) => {dbo.collection(collection).findOne({_id: ObjectId(_id)}, (error, result) => {
        if (error) resolve(error);
        resolve(result);
    });
 })
}
const updateOne = async (collection, _id, item) => {
    return await new Promise((resolve, reject) => {dbo.collection(collection).updateOne({_id: ObjectId(_id)},{$set: item}, (error, result) => {
        if (error) resolve(error);
        resolve(result);
    });
 })
}
const deleteOne = async (collection, _id) => {
    return await new Promise((resolve, reject) => {dbo.collection(collection).deleteOne({_id: ObjectId(_id)}, (error, result) => {
        if (error) resolve(error);
        resolve(result);
    });
 })
}
const searchByParam = async (collection, param, value) => {
    return await new Promise((resolve, reject) => {dbo.collection(collection).find({[param]: value}).toArray((error, result) => {
        if (error) resolve(error);
        resolve(result);
    });
 })
}

module.exports = { createOne, createMany, getAll, getOne, updateOne, deleteOne, searchByParam }
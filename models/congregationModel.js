const { createOne, getAll, getOne, updateOne, deleteOne } = require('../bd/dbMethods');
const collection = 'congregation'

const createCongregation = async (congregation) => {
    try{
        const result = await createOne(collection, congregation);
        return result
    }catch(error){
        return error
    }
}
const getAllCongregations = async () => {
    try{
        const result = await getAll(collection)
        return result
    }catch(error){
        return error
    }
}
const getOneCongregation = async (_id) => {
    try{
        const result = await getOne(collection, _id)
        return result
    }catch(error){
        return error
    }
}
const updateCongregation = async (congregation) => {
    const _id = congregation._id;
    delete congregation._id;
    try{
        const result = await updateOne(collection, _id, congregation)
        return result
    }catch(error){
        return error
    }
}
const deleteCongregation = async (_id) => {
    try{
        const result = await deleteOne(collection, _id)
        return result
    }catch(error){
        return error
    }
}

module.exports = { createCongregation, getOneCongregation, updateCongregation, getAllCongregations, deleteCongregation }

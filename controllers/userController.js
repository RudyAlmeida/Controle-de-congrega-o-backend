const { createUser, getOneUser, updateUser, getAllUsers, deleteUser, getUsersByCongregation } = require('../models/userModel')
const login = require('../helpers/loginHelper')


const createUserController = async (req, res) => {
    const result = await createUser(req.body)
    return result instanceof Error ? res.status(400).send(result.message) : res.status(201).send(result)
}
const getOneUserController = async (req, res) => {
    const result = await getOneUser(req.body._id)
    return !result ? res.status(400).send('Erro ao recuperar Super User') : res.status(200).send(result)
}
const getAllUsersConstroller = async (req, res) => {
    const result = await getAllUsers()
    return !result ? res.status(400).send('Erro ao recuperar todos os Super Users') : res.status(200).send(result)
}
const updateOneUsersConstroller = async (req, res) => {
    const result = await updateUser(req.body)
    return !result ? res.status(400).send('Erro ao atualizar Super Users') : res.status(200).send(result)
}
const deleteOneUsersConstroller = async (req, res) => {
    const result = await deleteUser(req.body._id)
    return !result ? res.status(400).send('Erro ao deletar Super Users') : res.status(200).send(result)
}
const getUsersByCongregationController = async (req, res) => {
    const result = await getUsersByCongregation(req.body._id)
    return !result ? res.status(400).send('Erro ao deletar Super Users') : res.status(200).send(result)
}
const userLogin = async (req, res) => {
    const result = await login('user', req.body)
    if(result instanceof Error){
        res.status(400).send(result.message)
    } else {
            res.cookie("jwt", result.token, {
              httpOnly: true,
              maxAge: 3 * 60 * 60 * 1000,
              sameSite: 'none',
              domain: 'controle-de-congreg-backend.herokuapp.com'
            });
            res.status(200).send(result)
    }
}


module.exports = { createUserController, getOneUserController, getAllUsersConstroller, updateOneUsersConstroller, deleteOneUsersConstroller, getUsersByCongregationController, userLogin }
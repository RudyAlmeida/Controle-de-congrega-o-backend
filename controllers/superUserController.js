const { createSuperUser, getOneSuperUser, updateSuperUser, getAllSuperUsers, deleteSuperUser } = require('../models/superUserModel')
const login = require('../helpers/loginHelper')


const createSuperUserController = async (req, res) => {
    const result = await createSuperUser(req.body)
    return result instanceof Error ? res.status(400).send(result.message) : res.status(201).send(result)
}
const getOneSuperUserController = async (req, res) => {
    const result = await getOneSuperUser(req.params._id)
    return !result ? res.status(400).send('Erro ao recuperar Super User') : res.status(200).send(result)
}
const getAllSuperUsersConstroller = async (req, res) => {
    const result = await getAllSuperUsers()
    return !result ? res.status(400).send('Erro ao recuperar todos os Super Users') : res.status(200).send(result)
}
const updateOneSuperUsersConstroller = async (req, res) => {
    const result = await updateSuperUser(req.body)
    return !result ? res.status(400).send('Erro ao atualizar Super Users') : res.status(200).send(result)
}
const deleteOneSuperUsersConstroller = async (req, res) => {
    const result = await deleteSuperUser(req.body._id)
    return !result ? res.status(400).send('Erro ao deletar Super Users') : res.status(200).send(result)
}
const superUserLogin = async (req, res) => {
    const result = await login('superUser', req.body)
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
module.exports = { createSuperUserController, getOneSuperUserController, getAllSuperUsersConstroller, updateOneSuperUsersConstroller, deleteOneSuperUsersConstroller, superUserLogin }
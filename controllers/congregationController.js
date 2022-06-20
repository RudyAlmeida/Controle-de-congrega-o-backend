const { createCongregation, getOneCongregation, updateCongregation, getAllCongregations, deleteCongregation } = require('../models/congregationModel')

const createCongregationController = async (req, res) => {
    const result = await createCongregation(req.body)
    return result instanceof Error ? res.status(400).send(result.message) : res.status(201).send(result)
}
const getOneCongregationController = async (req, res) => {
    const result = await getOneCongregation(req.params._id)
    return !result ? res.status(400).send('Erro ao recuperar Congregação') : res.status(200).send(result)
}
const getAllCongregationsConstroller = async (req, res) => {
    const result = await getAllCongregations()
    return !result ? res.status(400).send('Erro ao recuperar todos os Congregaçôes') : res.status(200).send(result)
}
const updateOneCongregationsConstroller = async (req, res) => {
    const result = await updateCongregation(req.body)
    return !result ? res.status(400).send('Erro ao atualizar Congregação') : res.status(200).send(result)
}
const deleteOneCongregationsConstroller = async (req, res) => {
    const result = await deleteCongregation(req.body._id)
    return !result ? res.status(400).send('Erro ao deletar Congregaçôes') : res.status(200).send(result)
}

module.exports = { createCongregationController, getOneCongregationController, getAllCongregationsConstroller, updateOneCongregationsConstroller, deleteOneCongregationsConstroller }
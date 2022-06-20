const express = require('express');
const router = express.Router();
const { createUserController, getOneUserController, getAllUsersConstroller, updateOneUsersConstroller, deleteOneUsersConstroller, getUsersByCongregationController, userLogin } = require('../controllers/userController')

router.get('/', getAllUsersConstroller)
router.get('/:_id', getOneUserController)
router.get('/congregation/:_id', getUsersByCongregationController)
router.post('/', createUserController)
router.patch('/', updateOneUsersConstroller)
router.delete('/', deleteOneUsersConstroller)
router.post('/login', userLogin)

module.exports = router
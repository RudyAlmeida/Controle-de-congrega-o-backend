const express = require('express');
const router = express.Router();
const { adminAuth } = require('../helpers/adminHelper')
const { userAuth } = require('../helpers/userHelper')
const { createUserController, getOneUserController, getAllUsersConstroller, updateOneUsersConstroller, deleteOneUsersConstroller, getUsersByCongregationController, userLogin, addRegistryToUserController } = require('../controllers/userController')

router.post('/getall', adminAuth, getAllUsersConstroller)
router.post('/getone', userAuth, getOneUserController)
router.post('/congregation/', adminAuth, getUsersByCongregationController)
router.post('/', adminAuth, createUserController)
router.patch('/', userAuth, updateOneUsersConstroller)
router.patch('/add', userAuth, addRegistryToUserController)
router.delete('/', adminAuth, deleteOneUsersConstroller)
router.post('/login', userLogin)

module.exports = router
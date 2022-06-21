const express = require('express');
const router = express.Router();
const { createSuperUserController, getOneSuperUserController, getAllSuperUsersConstroller, updateOneSuperUsersConstroller, deleteOneSuperUsersConstroller, superUserLogin } = require('../controllers/superUserController');
const { superUserAuth } = require('../helpers/superUserHelper')

router.post('/getall', superUserAuth, getAllSuperUsersConstroller)
router.post('/getone', superUserAuth, getOneSuperUserController)
router.post('/', superUserAuth, createSuperUserController)
router.patch('/', superUserAuth, updateOneSuperUsersConstroller)
router.delete('/', superUserAuth, deleteOneSuperUsersConstroller)
router.post('/login', superUserLogin)

module.exports = router
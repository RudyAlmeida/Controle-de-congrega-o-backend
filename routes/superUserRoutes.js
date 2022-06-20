const express = require('express');
const router = express.Router();
const { createSuperUserController, getOneSuperUserController, getAllSuperUsersConstroller, updateOneSuperUsersConstroller, deleteOneSuperUsersConstroller, superUserLogin } = require('../controllers/superUserController');
const { superUserAuth } = require('../helpers/superUserHelper')

router.get('/', superUserAuth, getAllSuperUsersConstroller)
router.get('/:_id', superUserAuth, getOneSuperUserController)
router.post('/', superUserAuth, createSuperUserController)
router.patch('/', superUserAuth, updateOneSuperUsersConstroller)
router.delete('/', superUserAuth, deleteOneSuperUsersConstroller)
router.post('/login', superUserLogin)

module.exports = router
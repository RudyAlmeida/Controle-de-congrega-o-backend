const express = require('express');
const router = express.Router();
const { superUserAuth } = require('../helpers/superUserHelper')
const { adminAuth } = require('../helpers/adminHelper')
const { createCongregationController, getOneCongregationController, getAllCongregationsConstroller, updateOneCongregationsConstroller, deleteOneCongregationsConstroller } = require('../controllers/congregationController')

router.post('/getall', superUserAuth, getAllCongregationsConstroller)
router.get('/:_id', adminAuth, getOneCongregationController)
router.post('/',superUserAuth, createCongregationController)
router.patch('/',adminAuth, updateOneCongregationsConstroller)
router.delete('/',superUserAuth, deleteOneCongregationsConstroller)

module.exports = router
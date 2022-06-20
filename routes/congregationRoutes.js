const express = require('express');
const router = express.Router();
const { createCongregationController, getOneCongregationController, getAllCongregationsConstroller, updateOneCongregationsConstroller, deleteOneCongregationsConstroller } = require('../controllers/congregationController')

router.get('/', getAllCongregationsConstroller)
router.get('/:_id', getOneCongregationController)
router.post('/', createCongregationController)
router.patch('/', updateOneCongregationsConstroller)
router.delete('/', deleteOneCongregationsConstroller)

module.exports = router
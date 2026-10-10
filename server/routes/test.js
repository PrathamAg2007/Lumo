const express = require('express')
const getTest = require('../controllers/test')
const router = express.Router()

router.route('/api/health').get(getTest)

module.exports = router
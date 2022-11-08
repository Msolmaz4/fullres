

const router = require('express').Router()
const allControl = require('../controller/allControl')


router.post('/',allControl)

module.exports = router
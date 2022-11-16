

const router = require('express').Router()
const allControl = require('../controller/allControl')
const getaControl = require('../controller/aControl')
const addControll = require('../controller/addControll')
const deleteControll =require('../controller/deleteControl')
const updateUpload = require('../controller/updateUpload')
const multer = require("multer");
const add = multer()




router.post('/',allControl)
router.post('/product/:id',getaControl)
router.post('/product',addControll)
router.delete('/product/:id',deleteControll)
router.patch('/product/:id',updateUpload)



module.exports = router
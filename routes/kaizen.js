const express = require('express')
const router = express.Router()

const KaizenController = require('../controllers/KaizenController')

router.get('/', KaizenController.index)
router.post('/show', KaizenController.show)
router.post('/store', KaizenController.store)
router.post('/update', KaizenController.update)
router.post('/delete', KaizenController.destroy)

module.exports = router;
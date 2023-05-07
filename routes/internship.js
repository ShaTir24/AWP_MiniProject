const express = require('express')
const router = express.Router()

const InternshipController = require('../controllers/InternshipController')

router.get('/', InternshipController.index)
router.post('/show', InternshipController.show)
router.post('/store', InternshipController.store)
router.post('/update', InternshipController.update)
router.post('/delete', InternshipController.destroy)

module.exports = router;
const express = require('express')
const router = express.Router()

const ProjectController = require('../controllers/ProjectController')

router.get('/', ProjectController.index)
router.post('/show', ProjectController.show)
router.post('/store', ProjectController.store)
router.post('/update', ProjectController.update)
router.post('/delete', ProjectController.destroy)

module.exports = router;
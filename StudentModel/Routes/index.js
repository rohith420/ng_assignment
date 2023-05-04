const router = require('express').Router()
const controller = require('../Controllers/index')

router.post('/',controller.createStudents)
router.get('/',controller.getStudents)
router.get('/:id',controller.getStudentById)
router.put('/:id',controller.updateStudent)
router.delete(`/:id`,controller.deleteStudent)
module.exports = router
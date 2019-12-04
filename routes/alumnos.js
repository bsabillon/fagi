const express = require('express');
const router = express.Router();
const methods = require('../applicationServices/alumnoAppServices');


router.post('/add',methods.addAlumno);
router.get('/', methods.getAlumnos);
router.get('/getById/:alumnoId?', methods.getAlumnoById);
router.put('/update/:alumnoId?',methods.updateAlumno);
router.delete('/delete/:alumnoId?', methods.deleteAlumno);

module.exports = router;
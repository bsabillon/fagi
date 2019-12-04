const express = require('express');
const router = express.Router();
const methods = require('../applicationServices/gradosAppServices');


router.post('/add',methods.addGrado);
router.get('/', methods.getGrados);
router.get('/getById/:alumnoId?', methods.getGradoById);
router.put('/update/:alumnoId?',methods.updateGrado);
router.delete('/delete/:alumnoId?', methods.deleteGrado);

module.exports = router;
const express = require('express');
const router = express.Router();
const methods = require('../applicationServices/padreAppServices');


router.post('/add',methods.addPadre);
router.get('/', methods.getPadres);
router.get('/getById/:padreId?', methods.getPadreById);
router.put('/update/:padreId?',methods.updatePadre);
router.delete('/delete/:padreId?', methods.deletePadre);

module.exports = router;
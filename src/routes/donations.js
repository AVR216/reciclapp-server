const { Router } = require('express');
const controller = require('../controllers/index'); 

const router = Router();

//rutas get
router.get('/list', controller.donation.list);
//rutas post

//rutas patch

//rutas delete

module.exports = router;
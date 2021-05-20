const { Router } = require('express');
const controller = require('../controllers/index');

const router = Router();

//rutas get
router.get('/list', controller.employees.list);
router.get('/find', controller.employees.find);

//post
router.post('/signup', controller.employees.signup);

module.exports = router;
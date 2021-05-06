const { Router } = require('express');
const controller = require('../controllers/index');

const router = Router();

//rutas get
router.get('/list', controller.employees.list);

module.exports = router;
const controller = require('../controllers/index');
const { Router } = require('express');

const router = Router();

//rutas get
router.get('/list', controller.collect.list);
router.get('/get-collect', controller.collect.getCollect);

//rutas post
router.post('/add-collect', controller.collect.addCollect);

//otras

module.exports = router; 
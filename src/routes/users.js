const { Router } = require('express');
const controller = require('../controllers/index');

const router = Router();

//peticiones get
router.get('/list', controller.users.list);

module.exports = router;
const { Router } = require('express');
const controller = require('../controllers/index');

const router = Router();

//peticiones get
router.get('/list', controller.users.list);
router.get('/find', controller.users.find);

//peticiones post
router.post('/signup', controller.users.signup);

module.exports = router;
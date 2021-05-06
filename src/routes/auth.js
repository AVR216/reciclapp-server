const {Router} = require ('express');
const authController = require ('../controllers/authController');

const router = Router();

router.post('/login-users', authController.loginUsers);
router.post('/login-employees', authController.loginEmployees);

module.exports = router;

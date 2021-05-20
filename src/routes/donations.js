const { Router } = require('express');
const controller = require('../controllers/index'); 

const router = Router();

//rutas get
router.get('/list', controller.donation.list);
router.get('/get-donation', controller.donation.getDonation);

//rutas post
router.post('/add-donation', controller.donation.addDonation);

//rutas patch

//rutas delete

module.exports = router;
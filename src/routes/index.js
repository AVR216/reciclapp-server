const { Router } = require('express');
const router = Router();
const User = require('../models/usuario');
const Employee = require('../models/empleado');
const Donation = require('../models/donaciones');
const routes = require('./routes');

router.get('/', (req, res) => {
    res.send('The project root');
});

/**
 * rutas para logueo de usuarios y empleados
 */
router.use('/auth', routes.auth);

/**
 * rutas para usuarios
 */
router.use('/user', routes.users);

/**
 * rutas para donaciones
 */
router.use('/donation', routes.donations);

/**
 * rutas para empleados
 */
router.use('/employee', routes.employees);

router.post('/register-user', async (req, res) => {
    //completar
    const { name, last_name, birthDate, cc, address, email, password } = req.body;
    const user = new User({ name, last_name, birthDate, cc, address, email, password });

    await user.save();
    console.log('user add');
    if (!user) return res.status(400).send('The user doesn´t register');
    res.status(200).json(user);
});


router.post('/add-donation', async (req, res) => {
    const { materials, donor, collector, state, weight } = req.body;
    const donation = new Donation({ materials, donor, collector, state, weight });
    await donation.save();
    console.log(`donation add ${weight} kgs`);
    res.status(200).json(donation);
});


router.post('/register-employee', async (req, res) => {
    //completar
    const { name, last_name, phone, account, cc, email, password } = req.body;
    const employee = new Employee({ name, last_name, phone, account, cc, email, password });

    await employee.save();

    console.log('employee add');

    res.status(200).json(employee);
});

module.exports = router;
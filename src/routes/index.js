const { Router } = require('express');
const router = Router();
const routes = require('./routes');

router.get('/', (req, res) => {
    res.send({
        message: 'The project root',
        nameApi: 'reciclapp-server',
        asignature: 'Software II',
        equipDevelopment: [
            {
                name: 'Leidy Fonseca',
                email: 'leidy.02@uptc.edu.co'
            },
            {
                name: 'Jhon Villalba',
                email: 'jhon.villalba@uptc.edu.co'
            },
            {
                name: 'Niva Gonzalez'
            },
            {
                name: 'Andrea Mendieta'
            }
        ]
    });
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

/**
 * rutas para recogidas
 */
router.use('/collect', routes.collects);


module.exports = router;
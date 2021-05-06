const User = require('../models/usuario');
const Employee = require('../models/empleado');

const controller = {
    /**
     * metodo para loguear usuarios, en este se valida correo, contraseña
     * @param {*} req 
     * @param {*} res 
     * @returns Estado de la acción y datos del usuario u errores en caso de que existan.
     */
    loginUsers: async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(401).send({
            status: 'error',
            message: 'The email doesn´t register into database'
        });
        if (password !== user.password) return res.status(401).send({
            status: 'error',
            message: 'Wrong password'
        });

        return res.status(200).send({
            status: 'success',
            message: 'User register into Database',
            user
        });
    },
    loginEmployees: async (req, res) => {
        const { email, password } = req.body;
        const employee = await Employee.findOne({ email });
        if (!employee) return res.status(401).send({
            status: 'error',
            message: 'The email doesn´t register into database'
        });
        if (employee.password != password) return res.status(401).send({
            status: 'error',
            message: 'Wrong password'
        });
        res.status(200).send({
            status: 'success',
            message: 'Employee register into Database',
            employee
        });
    }
};

module.exports = controller;
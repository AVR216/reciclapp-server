'use strict'

const validator = require('validator');

const Employee = require('../models/empleado');

const controller = {
    list: (req, res) => {
        res.send('listado de empleados');
    },
    signup: (req, res) => {
        const params = req.body;

        //validando los datos recibidos
        try {
            var validate_name = !validator.isEmpty(params.name);
            var validate_lastName = !validator.isEmpty(params.last_name);
            var validate_phone = !validator.isEmpty(params.phone);
            var validate_account = !validator.isEmpty(params.account);
            var validate_cc = !validator.isEmpty(params.cc);
            var validate_email = !validator.isEmpty(params.email);
            var validate_password = !validator.isEmpty(params.password);

        } catch (error) {
            res.status(404).send({
                status: 'error',
                message: 'Datos incompletos, no se puede hacer el registro',
                error
            });
        }
        if (validate_name && validate_lastName && validate_phone && validate_account &&
            validate_cc && validate_email && validate_password) {

            const employee = new Employee();
            employee.name = params.name;
            employee.last_name = params.last_name;
            employee.phone = params.phone;
            employee.account = params.account;
            employee.cc = params.cc;
            employee.email = params.email;
            employee.password = params.password;

            employee.save((err, empStrored) => {
                if (err || empStrored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'El empleado no pudo ser registrado'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    message: 'Empleado registrado exitosamente',
                    empStrored
                });
            });
            return res.status(200).send({
                status: 'success',
                message: 'Empleado registrado exitosamente',
                employee
            });
        } else {
            return res.status(404).send({
                status: 'error',
                message: 'Datos no validos'
            });
        }
    }
};

module.exports = controller;
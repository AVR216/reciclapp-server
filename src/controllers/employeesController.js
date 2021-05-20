'use strict'

const model = require('../models/index');

const controller = {
    list: async (req, res, next) => {
        try {
            const list = await model.Employee.find().sort({ 'createdAt': -1 });
            if (list.length < 1) return res.status(404).send({
                status: 'error',
                message: 'Aún no hay empleados registrados que puedan ser lsitados'
            });
            return res.status(200).send({
                status: 'success',
                message: 'Listado de empleados existente',
                list
            });
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'Error en el proceso'
            });
            next(error);
        }
    },
    signup: async (req, res, next) => {
        const { name, last_name, phone, account, cc, role, email, password } = req.body;

        try {
            const employee = await model.Employee.create({
                name,
                last_name,
                phone,
                account,
                cc,
                role,
                email,
                password
            });
            res.status(200).send({
                status: 'success',
                message: 'Empleado registrado con exito',
                employee
            });
        } catch (error) {
            res.status(500).send({
                status: 'error',
                messagge: 'Error en el proceso de registro, debe ingresar todos los datos ya que todos son requeridos'
            });
            next(error);
        }
    },
    find: async (req, res, next) => {
        const id = req.query._id;
        try {
            const employee = await model.Employee.findOne({ _id: id });
            if (!employee) return res.status(404).send({
                status: 'error',
                message: 'Empleado no registrado en la base de datos'
            });
            return res.status(200).send({
                status: 'success',
                message: 'Empleado resgistrado en la base de datos',
                employee
            });
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'Error en el proceso'
            });
            next(error);
        }
    }
};

module.exports = controller;
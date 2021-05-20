'use strict'

const model = require('../models/index');

const controller = {
    list: async (req, res, next) => {
        try {
            const list = await model.User.find().sort({ 'createdAt': -1 });
            if (list.length < 1) return res.status(404).send({
                status: 'error',
                message: 'Aún no hay usuarios registrados que puedan ser lsitados'
            });
            return res.status(200).send({
                status: 'success',
                message: 'Listado de usuarios existente',
                list
            });
        } catch (error) {
            res.status(200).send({
                status: 'error',
                'message': 'El servidor no puede procesar la solicitud'
            });
            next(error);
        }
    },
    signup: async (req, res, next) => {

        const { name, last_name, birthDate, phone, cc, address, email, password } = req.body;

        try {
            const user = await model.User.create({
                name,
                last_name,
                birthDate,
                phone,
                cc,
                address,
                email,
                password
            });

            if (!user) return res.status(404).send({
                status: 'error',
                message: 'El usuario no puedo ser registrado'
            });

            res.status(200).send({
                status: 'success',
                message: 'Usuario registrado correctamente',
                user
            });

        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'El servidor no puede procesar la petición'
            });
            next(error);
        }
    },
    find: async (req, res, next) => {
        const id = req.query._id;

        try {
            const user = await model.User.findOne({ _id: id });
            if (!user) return res.status(404).send({
                status: 'error',
                message: 'Usuario no registrado en la base de datos'
            });
            return res.status(200).send({
                status: 'success',
                message: 'Usuario resgistrado en la base de datos',
                user
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
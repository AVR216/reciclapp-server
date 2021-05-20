const model = require('../models/index');

const controller = {
    list: async (req, res, next) => {
        try {
            const list = await model.Collect.find().sort({ 'createdAt': -1 });
            if (list.length < 1) return res.status(404).send({
                status: 'error',
                message: 'Aún no hay recogidas para mostrar'
            });
            return res.status(200).send({
                status: 'success',
                message: 'Listado de recogidas existentes',
                list
            });
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'El servidor no puede procesar la petición'
            });
            next(error);
        }
    },
    addCollect: async (req, res, next) => {

        const { donation, collector } = req.body;

        try {
            const collect = await model.Collect.create({
                donation,
                collector
            });
            res.status(200).send({
                status: 'success',
                message: 'Recogida asiganda con éxito en el sistema',
                collect
            });
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'Compruebe los datos necesarios para registrar la recogida de la donacion'
            });
            next(error);
        }
    },
    getCollect: async (req, res, next) => {
        const id = req.query._id;

        try {
            const collect = await model.Collect.findOne({ _id: id });
            if (!collect) return res.status(404).send({
                status: 'error',
                message: 'Recogida no registrada en el sistema'
            });
            return res.status(200).send({
                status: 'success',
                message: 'Recogida registrada en el sistema',
                collect
            });
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'La petición no puede ser procesada por el servidor'
            });
            next(error);
        }
    }
};

module.exports = controller;
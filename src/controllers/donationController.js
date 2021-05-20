const model = require('../models/index');

const controller = {
    list: async (req, res, next) => {
        try {
            const list = await model.Donation.find().sort({ 'createdAt': -1 });
            if (list.length < 1) return res.status(404).send({
                status: 'error',
                message: 'Aún no hay donaciones para mostrar'
            });
            return res.status(200).send({
                status: 'success',
                message: 'Listado de donaciones existentes',
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
    addDonation: async (req, res, next) => {
        const { materials, donor, weight, state } = req.body;
        try {
            const donation = await model.Donation.create({
                materials,
                donor,
                weight,
                state
            });
            res.status(200).send({
                status: 'success',
                message: 'Donacion registrada en el sistema',
                donation
            });
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'Compruebe los datos necesarios para registrar la donación, intente nuevamente'
            });
            next(error);
        }
    },
    getDonation: async (req, res, next) => {
        const id = req.query._id;
        try {
            const donation = await model.Donation.findOne({ _id: id });
            if (!donation) return res.status(404).send({
                status: 'error',
                message: 'Donacion no registrada en el sistema'
            });
            return res.status(200).send({
                status: 'success',
                message: 'Donación registrada en la base de datos',
                donation
            });
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'La petición no puede ser procesada por el servidor'
            });
            next(error);
        }
    },
    getDonationsUser: async (req, res, next)=>{
        const id = req.query.id; //id del usuario
        try {
            const donationsList = await model.Donation.find({ donor: id }).sort({'createdAt': -1});
            if(donationsList.length < 1) return res.status(404).send({
                status: 'error',
                message: 'El usuario no tiene historial de donaciones',
            });
            return res.status(200).send({
                status: 'success',
                message: 'Listado de donaciones del usuario',
                donationsList
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
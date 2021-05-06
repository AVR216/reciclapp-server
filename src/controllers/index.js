'use strict'

const auth = require('./authController');
const donation = require('./donationController');
const employees = require('./employeesController');
const users = require('./usersController');

module.exports = {
    auth,
    donation,
    employees,
    users
};
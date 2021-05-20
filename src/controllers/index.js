'use strict'

const auth = require('./authController');
const donation = require('./donationController');
const employees = require('./employeesController');
const users = require('./usersController');
const collect = require('./collectController');

module.exports = {
    auth,
    donation,
    employees,
    users,
    collect
};
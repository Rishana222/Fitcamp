const express = require('express');
const { CreateSignupController } = require('../controller/signup.controller');
const route = express.Router();

route.post('/createsignup', CreateSignupController);

module.exports = route;
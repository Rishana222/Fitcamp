const express = require('express');
const {CreateLoginController } = require('../controller/login.controller');
const route = express.Router();

route.post('/createlogin', CreateLoginController);
module.exports = route;
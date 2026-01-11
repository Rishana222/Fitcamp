const express = require('express');
const {TransactionCreateController,
    TransactionGetAllController} = require('../controller/transaction.controller');
const route = express.Router();

route.post('/createtransaction', TransactionCreateController);
route.get('/transaction/user/:userId', TransactionGetAllController);
module.exports = route;
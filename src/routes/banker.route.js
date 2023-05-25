const express = require("express");
// Imported middleware
const bankerVerifivation = require("../middlewares/banker.middleware");

//Imported controllers
const customersFunction = require("../controllers/banker/customers.controller");
const customerTransactionFunction = require("../controllers/banker/customerTransactions.controller");

const app = express.Router();

// Middleware
app.use(bankerVerifivation);

// User api
app.get("/customers", customersFunction);
app.get("/customerTransactions/:id", customerTransactionFunction);

module.exports = app;

const express = require("express");
// Imported middleware
const verifyToken = require("../middlewares/auth.middleware");

//Imported controllers
const accountFunction = require("../controllers/user/accout.controller");
const depositFunction = require("../controllers/user/deposite.controller");
const withdrawFunction = require("../controllers/user/withdraw.controller");
const transactionsFunction = require("../controllers/user/transactions.controller");

const app = express.Router();

// Middleware
app.use(verifyToken);

// User api
app.get("/account", accountFunction);
app.post("/deposit", depositFunction);
app.post("/withdraw", withdrawFunction);
app.get("/transactions", transactionsFunction);

module.exports = app;

const express = require("express");
const accountFunction = require("../controllers/user/accout.controller");
const verifyToken = require("../middlewares/auth.middleware");
const depositFunction = require("../controllers/user/deposite.controller");
const withdrawFunction = require("../controllers/user/withdraw.controller");
const transactionsFunction = require("../controllers/user/transactions.controller");

const app = express.Router();

app.use(verifyToken);

app.get("/account", accountFunction);
app.post("/deposit", depositFunction);
app.post("/withdraw", withdrawFunction);
app.get("/transactions", transactionsFunction);

module.exports = app;

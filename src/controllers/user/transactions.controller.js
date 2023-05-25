const User = require("../../models/user.model");
const Account = require("../../models/account.model");
const jwt = require("jsonwebtoken");

const token_secret = process.env.TOKEN_KEY;

let transactionsFunction = async (req, res) => {
  let { authorization } = req.headers;
  authorization = authorization.split(" ");
  let token = authorization[1];
  let decode = jwt.decode(token, token_secret);

  try {
    let transact = await Account.find({ userId: decode._id });
    return res.status(200).send({ transactions: transact });
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong" });
  }
};

module.exports = transactionsFunction;

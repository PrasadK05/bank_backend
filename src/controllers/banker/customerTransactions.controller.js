require("dotenv").config();
const Account = require("../../models/account.model");

let customerTransactionFunction = async (req, res) => {
  let { id } = req.params;
  try {
    let transactions = await Account.find({ userId: id }).sort({
      createdAt: -1,
    });
    return res.status(200).send({ transactions });
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong" });
  }
};

module.exports = customerTransactionFunction;

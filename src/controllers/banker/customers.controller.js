require("dotenv").config();
const User = require("../../models/user.model");

let customersFunction = async (req, res) => {
  try {
    let customers = await User.find({role:"customer"},{password:0,role:0, token:0});
    return res.status(200).send({ customers });
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong" });
  }
};

module.exports = customersFunction;

require("dotenv").config();
const User = require("../../models/user.model");
const jwt = require("jsonwebtoken");

const token_secret = process.env.TOKEN_KEY;

let logoutFunction = async (req, res) => {
  let { authorization } = req.headers;

  authorization = authorization.split(" ");
  let token = authorization[1];
  let decode = jwt.decode(token, token_secret);
  try {
    let out = await User.updateOne({ _id: decode._id }, { token: null });
    res.status(200).send({ message: "user logout successfull" });
  } catch (error) {
    res.status(400).send({ message: "Something went wrong" });
    console.log(error);
  }
};

module.exports = logoutFunction;

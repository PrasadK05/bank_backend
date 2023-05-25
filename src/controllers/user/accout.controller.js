require("dotenv").config();
const User = require("../../models/user.model");
const jwt = require("jsonwebtoken");

const token_secret = process.env.TOKEN_KEY;

let accountFunction = async (req, res) => {
  let { authorization } = req.headers;
  authorization = authorization.split(" ");
  let token = authorization[1];
  let decode = jwt.decode(token, token_secret);

  try {
    let user = await User.findOne(
      { _id: decode._id },
      { password: 0, role: 0, token: 0 }
    );
    return res.status(200).send({ account: user });
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong" });
  }
};

module.exports = accountFunction;

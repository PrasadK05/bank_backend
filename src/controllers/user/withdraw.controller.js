const User = require("../../models/user.model");
const Account = require("../../models/account.model");
const jwt = require("jsonwebtoken");

const token_secret = process.env.TOKEN_KEY;

let withdrawFunction = async (req, res) => {
  let { authorization } = req.headers;
  let { ammount, type } = req.body;
  authorization = authorization.split(" ");
  let token = authorization[1];
  let decode = jwt.decode(token, token_secret);

  ammount = Number(ammount);
  if (type !== "withdraw") {
    return res.status(400).send({ message: "wrong api" });
  }

  try {
    let user = await User.findOne(
      { _id: decode._id },
      { password: 0, role: 0, token: 0 }
    );
    if (user.balance < ammount) {
        return res.status(400).send({ message: "Insufficient Funds" });
    }
    let bal = user.balance - ammount;

    let dpst = await Account.create({
      userId: user._id,
      type,
      balance: bal,
      ammount,
    });
    let update = await User.updateOne({ _id: user._id }, { balance: bal });
    return res.status(200).send({ message:"Monwey withdrawl successfully" });
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong" });
  }
};

module.exports = withdrawFunction;

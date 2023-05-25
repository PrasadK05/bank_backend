require("dotenv").config();
const User = require("../../models/user.model");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

const token_secret = process.env.TOKEN_KEY;

let loginFunction = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      if (await argon2.verify(user.password, password)) {
        let bdy = {
          _id: user._id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
        let token = jwt.sign(bdy, token_secret, {
          expiresIn: "28 days",
        });

        let usr = await User.updateOne({ email }, { token });

        res.status(200).send({ status: true, token, user: bdy });
      } else {
        return res
          .status(400)
          .send({ status: false, messege: "Wrong Password" });
      }
    } else {
      return res.status(404).send({ status: false, messege: "User not found" });
    }
  } catch (e) {
    return res.status(404).send({ status: false, messege: "User not found" });
  }
};

module.exports = loginFunction;

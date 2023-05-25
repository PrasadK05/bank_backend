require("dotenv").config();
const User = require("../../models/user.model");
const argon2 = require("argon2");

let signupFunction = async (req, res) => {
  let data = req.body;
  // RegEx for Password, Eamil and Mobile Number
  let emailRegex =
    /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-z]{2,4})$/;
  let mobNumberRegex = /^[6-9]\d{9}$/;
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  // Checking values as per RegEx
  if (!emailRegex.test(data.email)) {
    return res.status(400).send({ status: false, message: "Invalid Email" });
  }
  if (!mobNumberRegex.test(data.mobileNumber)) {
    return res
      .status(400)
      .send({ status: false, message: "Invalid Mobile Number" });
  }
  if (!passwordRegex.test(data.password)) {
    return res.status(400).send({ status: false, message: "Invalid Password" });
  }

  // Checking exsitance of user
  let already_exist = await User.findOne({ email: data.email });
  if (already_exist) {
    return res
      .status(400)
      .send({ status: false, message: "User Already Registered" });
  }
  // Signup
  let hash = await argon2.hash(data.password);
  let user = await User.create({ ...data, password: hash });
  if (user) {
    return res.status(200).send({
      status: true,
      messege: "User Created Successfully",
    });
  } else {
    return res
      .status(400)
      .send({ status: false, messege: "Something Went Wrong" });
  }
};

module.exports = signupFunction;

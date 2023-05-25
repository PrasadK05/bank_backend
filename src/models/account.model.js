const mongoose = require("mongoose");

const acc = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    type: { type: String, enum: ["deposit", "withdraw"], required: true },
    balance: { type: Number },
    ammount: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Account = mongoose.model("account", acc);

module.exports = Account;

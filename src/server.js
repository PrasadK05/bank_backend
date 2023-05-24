require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connect = require("./config/db");

const PORT = process.env.PORT;

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Banks Backend");
});

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`running at ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});

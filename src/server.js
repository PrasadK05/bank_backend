require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connect = require("./config/db");

//controller functions
const signupFunction = require("./controllers/auth/signup.controller");
const loginFunction = require("./controllers/auth/login.controller");
const logoutFunction = require("./controllers/auth/logout.controller");

// imported routes
const userRoute = require("./routes/user.route");

const PORT = process.env.PORT;

const app = express();

// Middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

// Auth api
app.post("/signup", signupFunction);
app.post("/login", loginFunction);
app.get("/logout", logoutFunction);

// Routes
app.use("/user", userRoute);

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

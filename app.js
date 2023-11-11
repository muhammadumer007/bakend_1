const express = require("express");
require("dotenv").config();
const App = express();
const mongoose = require("mongoose");
const cors = require("cors")


const authRoute = require("./Routes/authrouter")
const courseRouter = require("./Routes/courseroute")
App.use(cors());
App.use(express.json());



// router for courses only
App.use("/course", courseRouter);
App.use("/auth", authRoute);
mongoose.connect(process.env.MONGO_URI).then(() => {
  App.listen(process.env.PORT, () => {
    console.log(`Running ${process.env.PORT}`);
  });
}).catch(err => {
  console.log("error",err)
})


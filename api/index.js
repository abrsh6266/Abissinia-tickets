require("dotenv").config();

const path = require("path");

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Body parser middleware to parse JSON
app.use(express.json());

const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");
app.use("/", authRoutes);
app.use("/admin", adminRoutes);

mongoose
  .connect(
    "mongodb+srv://asmarestu12:mongocloud2123@taskmanager.ladnzjg.mongodb.net/cinema?retryWrites=true&w=majority&appName=taskManager"
  )
  .then((result) => {
    console.log("connected TO PORT ", process.env.PORT);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

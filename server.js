const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  if (err) return console.log(err);
  console.log("Connected to mongoDB");
});

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/mail", require("./routes/mail"));

const PORT = 5000;
app.listen(PORT, () => console.log("Server running on Port " + PORT));

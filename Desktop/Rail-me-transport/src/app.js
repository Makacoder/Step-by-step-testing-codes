const express = require("express");
const mongoose = require("mongoose");
const CommuterRouter = require("./Routes/commuter.route");
require("dotenv").config();
const router = express.Router()

const app = express();
const PORT = 4000;

app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Correcto!!");
  } catch (error) {
    console.log(error);
    console.log("oops no info");
  }
};

connectDB();

app.use("/api/v1", CommuterRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

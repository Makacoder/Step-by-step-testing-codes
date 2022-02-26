const mongoose = require("mongoose");

const Commuter = mongoose.Schema;

const CommuterSchema = new Commuter({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const CommuterModel = mongoose.model("Commuter", CommuterSchema);
module.exports = CommuterModel;

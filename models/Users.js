const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    queue_number: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    address: { type: String, required: true },
    telephone: { type: String, required: true },
    gender: { type: String, required: true },
    religion: { type: String, required: true },
    poli: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.model("user", userSchema);

module.exports = User;

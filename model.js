const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  userID: {
    type: Number,
  },
  transactions: {
    type: Array,
  },
});

module.exports = mongoose.model("student", StudentSchema);

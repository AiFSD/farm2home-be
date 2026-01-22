const mongoose = require("mongoose");

const feedback = new mongoose.Schema({
  productName: { type: String },
  purchaseId: { type: Number },
  feedback: { type: String },
});
module.exports = mongoose.model("feedbacks", feedback);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pdfSchema = new Schema({
  pdf: { type: Buffer },
});

module.exports = mongoose.model("PDF", pdfSchema);

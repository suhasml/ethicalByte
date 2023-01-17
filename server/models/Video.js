const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const video = new Schema({
  title: { type: String },
  video_url: String,
  description: String,
  course_id: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  week: Number,
  pdf_id: {
    type: Schema.Types.ObjectId,
    ref: "PDF"
  }
});

module.exports = mongoose.model("Video", video);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  first_name: {type:String, required: true},
  last_name: String,
  username: {type:String, required: true},
  password: {type: String, required: true},
  email: {type:String, required: true},
  enrolled_courses: [
    { type: Schema.Types.ObjectId, ref: "Course", default: [] },
  ],
  notes: {
    type: Array,
    default: [],
  },
  bookmarks: {
    type: Array,
    default: [],
  },
  profile_picture: {
    type: String,
  },
});

const User = mongoose.model("User", user);

module.exports = User;
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const courseRoutes = require("./routes/courseRoutes");
const videoRoutes = require("./routes/videoRoutes");
const userRoutes = require("./routes/userRoutes");
const snapshotRoutes = require("./routes/snapshotRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { propfind } = require("./routes/courseRoutes");
const pdfRoutes = require("./routes/pdfRoutes");

require("dotenv").config({ path: "./.env"});

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/course", courseRoutes);
app.use("/video", videoRoutes);
app.use("/user", userRoutes);
app.use("/snapshot", snapshotRoutes);
app.use("/notes", noteRoutes);
app.use("/pdf", pdfRoutes);


const uri = process.env.DATABASE_URL;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose.connect(uri, options);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established successfully");
  app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
  });
});


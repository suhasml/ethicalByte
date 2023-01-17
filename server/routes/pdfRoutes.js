const express = require("express");
const router = express.Router();
const multer = require("multer");
const PDF = require("../models/PDF");
const fs = require('fs');

// configure storage for pdf files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/pdfs");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // only allow pdf files
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });


router.post("/uploadpdf", async (req, res) => {
  const pdfBuffer = req.file.buffer;
    const pdf = await PDF.create({ pdf: pdfBuffer });
    res.status(201).json({ pdf_id: pdf._id });
  });


  
module.exports = router;

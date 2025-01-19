const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

// Initialize App
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("uploads")); // Serve uploaded files

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/btg-studyhub", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Schema for Question Papers
const paperSchema = new mongoose.Schema({
  subject: String,
  year: String,
  filePath: String,
});

const QuestionPaper = mongoose.model("QuestionPaper", paperSchema);

// Multer Configuration for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique timestamp filenames
  },
});

const upload = multer({ storage });

// API Routes

// Upload Question Paper
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { subject, year } = req.body;
    const filePath = `http://localhost:5000/${req.file.filename}`;

    const newPaper = new QuestionPaper({ subject, year, filePath });
    await newPaper.save();

    res.status(200).json({ message: "File uploaded successfully", data: newPaper });
  } catch (error) {
    res.status(500).json({ message: "Error uploading file", error });
  }
});

// Get All Question Papers
app.get("/papers", async (req, res) => {
  try {
    const papers = await QuestionPaper.find();
    res.status(200).json(papers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching question papers", error });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

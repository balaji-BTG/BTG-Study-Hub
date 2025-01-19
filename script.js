// Exam Countdown Timer
const examDate = new Date("2025-03-05T09:00:00"); // Replace with your exam date

function updateTimer() {
  const now = new Date();
  const timeLeft = examDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateTimer, 1000);

// Question Paper Management
let questionPapers = [];

// Display Question Papers
function displayQuestionPapers() {
  const container = document.getElementById("papers-container");
  container.innerHTML = "";

  questionPapers.forEach((paper, index) => {
    const paperDiv = document.createElement("div");
    paperDiv.innerHTML = `
      <p><strong>Subject:</strong> ${paper.subject}</p>
      <p><strong>Year:</strong> ${paper.year}</p>
      <a href="${paper.file}" target="_blank">Download Paper</a>
      <button onclick="deletePaper(${index})">❌ Delete</button>
    `;
    container.appendChild(paperDiv);
  });
}

// Add New Question Paper
document.getElementById("add-paper-btn").addEventListener("click", () => {
  document.getElementById("add-paper-form").classList.remove("hidden");
});

document.getElementById("cancel-btn").addEventListener("click", () => {
  document.getElementById("add-paper-form").classList.add("hidden");
});

document.getElementById("uploadForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const subject = document.getElementById("subject").value;
  const year = document.getElementById("year").value;
  const file = document.getElementById("file").files[0];

  if (subject && year && file) {
    const fileURL = URL.createObjectURL(file);

    questionPapers.push({ subject, year, file: fileURL });
    displayQuestionPapers();
    document.getElementById("add-paper-form").classList.add("hidden");
    document.getElementById("uploadForm").reset();
  } else {
    alert("All fields are required!");
  }
});

// Delete Question Paper
function deletePaper(index) {
  questionPapers.splice(index, 1);
  displayQuestionPapers();
}

// Initial Setup
updateTimer();
displayQuestionPapers();
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

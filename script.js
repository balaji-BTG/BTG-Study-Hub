// script.js

// Days Counter
const examDate = new Date("March 5, 2025"); // Set your exam date
const today = new Date();
const daysLeft = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));

document.getElementById("days-counter").textContent = `Days Left for Exam: ${daysLeft}`;

// QR Code Section
const qrContainer = document.getElementById("qr-container");

// Example QR Codes
const qrData = [
  { text: "Important Papers", link: "https://example.com/papers" },
  { text: "Q&A Resources", link: "https://example.com/qna" },
];

qrData.forEach((qr) => {
  const qrCode = document.createElement("div");
  qrCode.innerHTML = `
    <p>${qr.text}</p>
    <a href="${qr.link}" target="_blank">Visit Link</a>
  `;
  qrContainer.appendChild(qrCode);
});
// script.js

// Sample Question Papers (You can replace or add more dynamically)
let questionPapers = [
  { subject: "Maths 1A", year: "2023", link: "https://example.com/maths1a-2023" },
  { subject: "Physics", year: "2022", link: "https://example.com/physics-2022" }
];

// Function to Display Question Papers
function displayQuestionPapers() {
  const papersContainer = document.getElementById("papers-container");
  papersContainer.innerHTML = ""; // Clear existing content

  questionPapers.forEach((paper, index) => {
    const paperDiv = document.createElement("div");
    paperDiv.innerHTML = `
      <p><strong>Subject:</strong> ${paper.subject}</p>
      <p><strong>Year:</strong> ${paper.year}</p>
      <a href="${paper.link}" target="_blank">Download Paper</a>
      <button onclick="deletePaper(${index})">❌ Delete</button>
    `;
    papersContainer.appendChild(paperDiv);
  });
}

// Function to Add a New Question Paper
function addQuestionPaper() {
  const subject = prompt("Enter Subject:");
  const year = prompt("Enter Year:");
  const link = prompt("Enter Download Link:");

  if (subject && year && link) {
    questionPapers.push({ subject, year, link });
    displayQuestionPapers(); // Refresh the list
  } else {
    alert("All fields are required!");
  }
}

// Function to Delete a Question Paper
function deletePaper(index) {
  if (confirm("Are you sure you want to delete this paper?")) {
    questionPapers.splice(index, 1); // Remove the selected paper
    displayQuestionPapers(); // Refresh the list
  }
}

// Event Listener for Add Button
document.getElementById("add-paper-btn").addEventListener("click", addQuestionPaper);

// Initial Display of Question Papers
displayQuestionPapers();
// script.js

let questionPapers = [];

// Function to Display Question Papers
function displayQuestionPapers() {
  const papersContainer = document.getElementById("papers-container");
  papersContainer.innerHTML = ""; // Clear existing content

  questionPapers.forEach((paper) => {
    const paperDiv = document.createElement("div");
    paperDiv.innerHTML = `
      <p><strong>Subject:</strong> ${paper.subject}</p>
      <p><strong>Year:</strong> ${paper.year}</p>
      <a href="${paper.file}" target="_blank">Download Paper</a>
    `;
    papersContainer.appendChild(paperDiv);
  });
}

// Show Add Paper Form
document.getElementById("add-paper-btn").addEventListener("click", () => {
  document.getElementById("add-paper-form").classList.remove("hidden");
});

// Cancel Add Paper
document.getElementById("cancel-btn").addEventListener("click", () => {
  document.getElementById("add-paper-form").classList.add("hidden");
});

// Handle File Upload
document.getElementById("uploadForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const subject = document.getElementById("subject").value;
  const year = document.getElementById("year").value;
  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];

  if (subject && year && file) {
    // Simulate File Upload (Use a backend to handle this properly)
    const fileURL = URL.createObjectURL(file);

    // Add to Question Papers List
    questionPapers.push({ subject, year, file: fileURL });

    // Refresh Papers and Hide Form
    displayQuestionPapers();
    document.getElementById("add-paper-form").classList.add("hidden");
    fileInput.value = ""; // Reset file input
  } else {
    alert("All fields are required!");
  }
});

// Initial Display
displayQuestionPapers();

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

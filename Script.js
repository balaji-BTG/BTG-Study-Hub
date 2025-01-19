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

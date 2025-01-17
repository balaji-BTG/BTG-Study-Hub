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


/* styles.css */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  color: #333;
  overflow-x: hidden;
}

header {
  background: #4caf50;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
  position: relative;
}

.header-content {
  position: relative;
  z-index: 1;
}

header::before {
  content: "";
  background: url('joystick.png') no-repeat center, url('books.png') no-repeat bottom;
  background-size: 120px, 200px;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  background: #2c3e50;
}

nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
  transition: background 0.3s ease;
}

nav ul li a:hover {
  background: #34495e;
  border-radius: 5px;
}

main {
  padding: 2rem;
}

section {
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

footer {
  text-align: center;
  padding: 1rem;
  background: #34495e;
  color: white;
}

footer p {
  margin: 0;
}


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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BTG Study Hub</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <div class="header-content">
      <h1>BTG Study Hub</h1>
      <p id="days-counter">Days Left for Exam: </p>
    </div>
  </header>

  <nav>
    <ul>
      <li><a href="#important-papers">📚 Important Papers</a></li>
      <li><a href="#qna">📝 Q&A</a></li>
      <li><a href="#last-5-years">📖 Last 5 Years’ Papers</a></li>
      <li><a href="#subjects">📘 Subjects</a></li>
      <li><a href="#qr-codes">🔗 QR Codes</a></li>
      <li><a href="#help-center">🤝 Help Center</a></li>
    </ul>
  </nav>

  <main>
    <section id="important-papers">
      <h2>📚 Important Question Papers</h2>
      <p>Download key question papers for all subjects.</p>
    </section>

    <section id="qna">
      <h2>📝 Important Questions & Answers</h2>
      <p>Get answers to frequently asked questions.</p>
    </section>

    <section id="last-5-years">
      <h2>📖 Last 5 Years’ Question Papers</h2>
      <p>Access previous question papers to excel in exams.</p>
    </section>

    <section id="subjects">
      <h2>📘 Subjects</h2>
      <ul>
        <li>Maths 1A</li>
        <li>Maths 1B</li>
        <li>Physics</li>
        <li>Chemistry</li>
        <li>Telugu</li>
        <li>English</li>
      </ul>
    </section>

    <section id="qr-codes">
      <h2>🔗 QR Codes</h2>
      <p>Scan these QR codes for quick access to resources.</p>
      <div id="qr-container"></div>
    </section>

    <section id="help-center">
      <h2>🤝 Help Center</h2>
      <p>Contact us on <a href="https://t.me/yourtelegramchannel" target="_blank">Telegram</a>.</p>
    </section>
  </main>

  <footer>
    <p>© 2025 BTG Study Hub | All Rights Reserved</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
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
document.addEventListener("DOMContentLoaded", function () {
  // Countdown Timer
  const targetDate = new Date("2025-03-05T00:00:00").getTime();
  const timerElement = document.getElementById("timer");

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      timerElement.innerHTML = "Exams are over!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = `Time Left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  setInterval(updateTimer, 1000);
  updateTimer();

  // File Upload Simulation
  const form = document.querySelector("#upload-form form");
  const fileList = document.getElementById("file-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const subject = document.getElementById("subject").value;
    const title = document.getElementById("title").value;

    if (title.trim() === "") {
      alert("Please enter a title.");
      return;
    }

    const newFile = document.createElement("div");
    newFile.classList.add("paper");
    newFile.innerHTML = `
      <p><strong>${subject}</strong>: ${title}</p>
      <button onclick="alert('Viewing is not implemented yet!')">View</button>
    `;

    fileList.appendChild(newFile);
    form.reset();
  });
});

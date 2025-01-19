// Countdown Timer
const examDate = new Date('2025-03-05T00:00:00');
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date();
  const diff = examDate - now;

  if (diff <= 0) {
    countdownElement.textContent = "Exams have started!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdownElement.textContent = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;
}

setInterval(updateCountdown, 1000);

// Handle Uploads Using Local Storage
const uploadForm = document.getElementById('upload-form');
const uploadedPapersList = document.getElementById('uploaded-papers');
const searchBar = document.getElementById('search-bar');
const papers = JSON.parse(localStorage.getItem('papers')) || [];

function displayPapers() {
  uploadedPapersList.innerHTML = papers.map((paper, index) => `
    <li>
      <div>
        <strong>${paper.title}</strong> - ${paper.subject}
      </div>
      <a href="${paper.file}" target="_blank">View</a>
    </li>
  `).join('');
}

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const subject = document.getElementById('subject').value;
  const file = document.getElementById('file').files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      papers.push({ title, subject, file: e.target.result });
      localStorage.setItem('papers', JSON.stringify(papers));
      displayPapers();
      uploadForm.reset();
    };
    reader.readAsDataURL(file);
  }
});

searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();
  const filteredPapers = papers.filter(paper =>
    paper.title.toLowerCase().includes(query) ||
    paper.subject.toLowerCase().includes(query)
  );
  uploadedPapersList.innerHTML = filteredPapers.map((paper) => `
    <li>
      <div>
        <strong>${paper.title}</strong> - ${paper.subject}
      </div>
      <a href="${paper.file}" target="_blank">View</a>
    </li>
  `).join('');
});

displayPapers();

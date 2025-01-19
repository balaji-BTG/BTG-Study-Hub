/* General Styling */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background: #000;
  color: #fff;
}

header {
  text-align: center;
  padding: 2rem;
  background: #333;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  background: #111;
}

nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
  padding: 0.5rem 1rem;
  transition: background 0.3s ease;
}

nav ul li a:hover {
  background: #444;
}

section {
  margin: 2rem;
  padding: 1.5rem;
  background: #222;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
}

button {
  background: #444;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background: #555;
}

.hidden {
  display: none;
}

/* Countdown Timer */
#timer span {
  font-size: 1.5rem;
  font-weight: bold;
}

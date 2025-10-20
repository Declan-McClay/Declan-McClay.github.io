// Toggle visibility of the mobile navigation menu
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");

  // Use classList for cleaner logic
  menu.classList.toggle("w3-show");
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check saved theme on load
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️ Light Mode';
}

// Listen for clicks
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️ Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    darkModeToggle.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});



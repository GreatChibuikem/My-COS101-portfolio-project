// app.js

// Simple functionality to alert the user on form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  alert('Thank you for your message! I will get back to you soon.');
});
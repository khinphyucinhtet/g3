// Select the header and toggle button
const header = document.getElementById('header');
const toggleButton = document.getElementById('toggleButton');

// Add click event listener to the button
toggleButton.addEventListener('click', () => {
  // Check the current display state and toggle it
  if (header.style.display === 'none') {
    header.style.display = 'block'; // Show the header
  } else {
    header.style.display = 'none'; // Hide the header
  }
});

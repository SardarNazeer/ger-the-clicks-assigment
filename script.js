// Initialize the counter
let counter = 0;

// Function to display an alert with the current counter value
function showAlert() {
  alert("Counter: " + counter);
}

// Function to increment the counter and show alert
function incrementCounterAndShowAlert() {
  counter++;
  showAlert();
}

// Add event listener for any key press
document.addEventListener('keydown', incrementCounterAndShowAlert);

// Reset counter to 0 when the page loads
window.addEventListener('load', function() {
  counter = 0;
});

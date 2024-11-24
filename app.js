// app.js

let screenTimeInSeconds = 0; // Initialize screen time in seconds
let tracking = false; // Tracking status flag
let interval; // Store the interval ID to stop it later
let breakReminderInterval; // Store the break reminder interval ID
let breakInterval = 30; // Default break interval in minutes

// Function to update the screen time on the page
function updateScreenTime() {
  const hours = Math.floor(screenTimeInSeconds / 3600);  // Calculate hours
  const minutes = Math.floor((screenTimeInSeconds % 3600) / 60);  // Calculate minutes
  const seconds = screenTimeInSeconds % 60;  // Calculate seconds
  document.getElementById("screen-time").textContent = `${hours} hours ${minutes} minutes ${seconds} seconds`;
}

// Function to start/stop tracking screen time
function toggleTracking() {
  if (tracking) {
    // Stop tracking time
    clearInterval(interval);
    document.getElementById("track-button").textContent = "Track My Time";
  } else {
    // Start tracking time
    interval = setInterval(() => {
      screenTimeInSeconds++; // Increment time in seconds
      updateScreenTime();
    }, 1000);  // Update every second
    document.getElementById("track-button").textContent = "Stop Tracking Time";
  }
  tracking = !tracking; // Toggle tracking status
}

// Function to remind user to take a break
function remindToTakeBreak() {
  alert("Reminder: Time to take a break! Stretch, walk, or relax for a bit.");
}

// Function to set the break reminder interval
function setBreakInterval() {
  breakInterval = parseInt(document.getElementById("break-interval").value, 10);
  clearInterval(breakReminderInterval); // Clear any existing reminder intervals
  breakReminderInterval = setInterval(remindToTakeBreak, breakInterval * 60 * 1000); // Set new interval based on user input
  alert(`Break reminder set to every ${breakInterval} minutes.`);
}

// Add event listeners to buttons
document.getElementById("track-button").addEventListener("click", toggleTracking);
document.getElementById("remind-button").addEventListener("click", remindToTakeBreak);
document.getElementById("set-interval").addEventListener("click", setBreakInterval);

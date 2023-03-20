// get DOM element for clock
const clock = document.getElementById("clock");

// start clock on page load
window.addEventListener("load", () => {
  // call displayTime every second
  setInterval(displayTime, 1000);
});

// update clock with current time
function displayTime() {
  // get Date object
  const currentDate = new Date();

  // initialize variables for hrs, mins, and secs
  let hrs = currentDate.getHours();
  let mins = currentDate.getMinutes();
  let secs = currentDate.getSeconds();

  // initialize a string to hold hrs, mins, and secs
  let timeString = hrs + ":" + mins + ":" + secs;

  // display time
  clock.textContent = timeString;
}

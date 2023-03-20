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

  // display 0 in front of numbers less than 10
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  // TODO: display am/pm

  // initialize a string to hold hrs, mins, and secs
  let timeString = hrs + ":" + mins + ":" + secs;

  // display time
  clock.textContent = timeString;
}

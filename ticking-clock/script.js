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

  // create a 12-hour display with am/pm
  let amPm = "";

  if (hrs > 12) {
    // subtract 12 from 13-24 hr
    hrs -= 12;
    amPm = "pm";
  }

  if (hrs == 0) {
    // set 0 hr to 12
    hrs = 12;
    amPm = "am";
  }

  // display 0 in front of numbers less than 10
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  // initialize a string to hold hrs, mins, and secs
  let timeString = hrs + ":" + mins + ":" + secs + " " + amPm;

  // display time
  clock.textContent = timeString;
}

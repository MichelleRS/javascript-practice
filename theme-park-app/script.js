/* get DOM elements */
const form = document.querySelector("form");
const rideInput = document.getElementById("rideInput");
const ageInput = document.getElementById("ageInput");
const answerPar = document.getElementById("answerPar");
const clearDataButton = document.getElementById("clearData");

/*  event listener on form submit */
form.addEventListener("submit", (e) => {
  // prevent page from refreshing on form submit
  e.preventDefault();

  // get ride input value and convert string to number
  let rideNumber = Number(rideInput.value);
  // get age input value and convert string to number
  let age = Number(ageInput.value);

  // error handling
  if (rideNumber > 5) {
    answerPar.textContent =
      "The ride number you entered does not exist. Check the list of rides and try again.";
  }

  // check scenic river cruise
  if (rideNumber === 1) {
    answerPar.textContent =
      "Yes, the age entered may ride the Scenic River Cruise. It is open to all ages.";
  }

  // check carnival carousel
  if (rideNumber === 2) {
    if (age < 3) {
      answerPar.textContent =
        "The age entered is not permitted to ride the Carnival Carousel. It is open to those 3 and older.";
    } else {
      answerPar.textContent =
        "Yes, the age entered is permitted to ride the Carnival Carousel. It is open to those 3 and older.";
    }
  }

  // check jungle adventure water splash
  if (rideNumber === 3) {
    if (age < 6) {
      answerPar.textContent =
        "The age entered is not permitted to ride the Jungle Adventure Water Splash. It is open to those 6 and older.";
    } else {
      answerPar.textContent =
        "Yes, the age entered may ride the Jungle Adventure Water Splash. It is open to those 6 and older.";
    }
  }

  // check downhill mountain run
  if (rideNumber === 4) {
    if (age < 12) {
      answerPar.textContent =
        "The age entered is not permitted to ride the Downhill Mountain Run. It is open to those 12 and older.";
    } else {
      answerPar.textContent =
        "Yes, the age entered may ride the Downhill Mountain Run. It is open to those 12 and older.";
    }
  }

  // check the regurgitator
  if (rideNumber === 5) {
    if (age < 12 || age > 90) {
      answerPar.textContent =
        "The age entered is not permitted to ride the Regurgitator. It is open to those between the ages of 12 and 90.";
    } else {
      answerPar.textContent =
        "Yes, the age entered may ride the Regurgitator. It is open to those between the ages of 12 and 90.";
    }
  }
});

// clear data
clearDataButton.addEventListener("click", () => {
  rideInput.value = "";
  ageInput.value = "";
  answerPar.textContent = "";
});

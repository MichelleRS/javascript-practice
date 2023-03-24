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
      "Error. The ride number entered does not exist. Check the list of rides and try again.";
    answerPar.className = "error";
  }

  switch (rideNumber) {
    // check scenic river cruise
    case 1:
      answerPar.textContent =
        "Yes, the age entered may ride the Scenic River Cruise. It is open to all ages.";
      answerPar.className = "permitted";
      break;

    // check carnival carousel
    case 2:
      if (age < 3) {
        answerPar.textContent =
          "The age entered is not permitted to ride the Carnival Carousel. It is open to those 3 and older.";
        answerPar.className = "notPermitted";
      } else {
        answerPar.textContent =
          "Yes, the age entered is permitted to ride the Carnival Carousel. It is open to those 3 and older.";
        answerPar.className = "permitted";
      }
      break;

    // check jungle adventure water splash
    case 3:
      if (age < 6) {
        answerPar.textContent =
          "The age entered is not permitted to ride the Jungle Adventure Water Splash. It is open to those 6 and older.";
        answerPar.className = "notPermitted";
      } else {
        answerPar.textContent =
          "Yes, the age entered may ride the Jungle Adventure Water Splash. It is open to those 6 and older.";
        answerPar.className = "permitted";
      }
      break;

    // check downhill mountain run
    case 4:
      if (age < 12) {
        answerPar.textContent =
          "The age entered is not permitted to ride the Downhill Mountain Run. It is open to those 12 and older.";
        answerPar.className = "notPermitted";
      } else {
        answerPar.textContent =
          "Yes, the age entered may ride the Downhill Mountain Run. It is open to those 12 and older.";
        answerPar.className = "permitted";
      }
      break;

    // check the regurgitator
    case 5:
      if (age < 12 || age > 90) {
        answerPar.textContent =
          "The age entered is not permitted to ride the Regurgitator. It is open to those between the ages of 12 and 90.";
        answerPar.className = "notPermitted";
      } else {
        answerPar.textContent =
          "Yes, the age entered may ride the Regurgitator. It is open to those between the ages of 12 and 90.";
        answerPar.className = "permitted";
      }
      break;
  }
});

// clear data
clearDataButton.addEventListener("click", () => {
  rideInput.value = "";
  ageInput.value = "";
  answerPar.textContent = "";
});

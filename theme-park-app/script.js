/* get DOM elements */
const form = document.querySelector("form");
const rideInput = document.getElementById("rideInput");
const ageInput = document.getElementById("ageInput");
const answerPar = document.getElementById("answerPar");
const clearDataButton = document.getElementById("clearData");
// rides
const carnivalCarouselEl = document.getElementById("carnivalCarousel");
const jungleAdventureEl = document.getElementById("jungleAdventure");
const downhillMountainEl = document.getElementById("downhillMountain");
const theRegurgitatorEl = document.getElementById("theRegurgitator");

/* get data attributes for ride age limits and convert strings to numbers */
// carnival carousel
// min age
const carnivalCarouselMinAge = Number(
  carnivalCarouselEl.getAttribute("data-min-age")
);
// max age
const carnivalCarouselMaxAge = Number(
  carnivalCarousel.getAttribute("data-max-age")
);
// jungle adventure
// min age
const jungleAdventureMinAge = Number(
  jungleAdventureEl.getAttribute("data-min-age")
);
// max age
const jungleAdventureMaxAge = Number(
  jungleAdventureEl.getAttribute("data-max-age")
);
// downhill mountain
// min age
const downhillMountainMinAge = Number(
  downhillMountainEl.getAttribute("data-min-age")
);
// max age
const downhillMountainMaxAge = Number(
  downhillMountainEl.getAttribute("data-max-age")
);
// the regurgitator
// min age
const theRegurgitatorMinAge = Number(
  theRegurgitatorEl.getAttribute("data-min-age")
);
// max age
const theRegurgitatorMaxAge = Number(
  theRegurgitatorEl.getAttribute("data-max-age")
);

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
      if (age < carnivalCarouselMinAge || age > carnivalCarouselMaxAge) {
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
      if (age < jungleAdventureMinAge || age > carnivalCarouselMaxAge) {
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
      if (age < downhillMountainMinAge || age > downhillMountainMaxAge) {
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
      if (age < theRegurgitatorMinAge || age > theRegurgitatorMaxAge) {
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

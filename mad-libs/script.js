function getAndSetValues() {
  // initialize variables get input value
  const nameInput = document.getElementById("nameInput").value;
  const animalInput = document.getElementById("animalInput").value;
  const vegetableInput = document.getElementById("vegetableInput").value;
  const musicGenreInput = document.getElementById("musicGenreInput").value;
  const movieTitleInput = document.getElementById("movieTitleInput").value;

  // error handling for browsers that do not support required attribute
  // get DOM element for error message
  const errorMessage = document.querySelector("p#error-message");

  // check for empty input(s)
  if (
    nameInput === "" ||
    animalInput === "" ||
    vegetableInput === "" ||
    musicGenreInput === "" ||
    movieTitleInput === ""
  ) {
    errorMessage.innerHTML = "Error. Missing one or more inputs";
    return false;
  }

  // set input values in their spans
  document.querySelector("span#name-01").innerText = nameInput;
  document.querySelector("span#name-02").innerText = nameInput;
  document.querySelector("span#name-03").innerText = nameInput;
  document.querySelector("span#animal").innerText = animalInput;
  document.querySelector("span#vegetable").innerText = vegetableInput;
  document.querySelector("span#music-genre").innerText = musicGenreInput;
  document.querySelector("span#movie").innerText = movieTitleInput;
}

// display results on form submit
function setFormSubmissionEventHandler() {
  let form = document.querySelector("form");
  form.onsubmit = function (e) {
    // prevent default behavior of refreshing page
    e.preventDefault();

    // call get and set values
    getAndSetValues();

    // remove .visually-hidden attribute value from results section
    const results = document.querySelector("section#results");
    results.classList.remove("visually-hidden");
  };
}

window.onload = function () {
  setFormSubmissionEventHandler();
};

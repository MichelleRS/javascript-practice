function getAndSetValues() {
  // initialize variables get input value
  const nameInput = document.getElementById("nameInput");
  const animalInput = document.getElementById("animalInput");
  const vegetableInput = document.getElementById("vegetableInput");
  const musicGenreInput = document.getElementById("musicGenreInput");
  const movieTitleInput = document.getElementById("movieTitleInput");

  // set input values in their spans
  document.querySelector("span#name").innerText = nameInput;
  document.querySelector("span#animal").innerText = animalInput;
  document.querySelector("span#vegetable").innerText = vegetableInput;
  document.querySelector("span#music-genre").innerText = musicGenreInput;
  document.querySelector("span#movie").innerText = movieTitleInput;
}

// display results

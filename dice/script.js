// get DOM elements
const rollButton = document.getElementById("roll");
const numberRolled = document.getElementById("num");

// display number rolled on button click
rollButton.addEventListener("click", () => {
  // set numberRolled to a random number: 1-6
  numberRolled.textContent = Math.floor(Math.random() * 6) + 1;
});

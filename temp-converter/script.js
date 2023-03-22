// get DOM elements
const fahrenheitInput = document.getElementById("fahrenheit");
const celsiusInput = document.getElementById("celsius");
const convertButton = document.getElementById("convertButton");
const resetButton = document.getElementById("resetButton");
const results = document.getElementById("resultsText");

convertButton.addEventListener("click", () => {
  // get value and set to a number
  let fahrenheit = Number(fahrenheitInput.value);
  let celsius = Number(celsiusInput.value);

  if (fahrenheit && celsius) {
    results.textContent = "Error. Converter only works with one number input.";
    return;
  }
  if (fahrenheit) {
    // convert to celsius
    celsius = (fahrenheit - 32) / 1.8;
    // display results with decimal value move to tenths place
    results.textContent =
      fahrenheit + "°F converts to " + celsius.toFixed(1) + "°C";
  } else {
    // convert to fahrenheit
    fahrenheit = celsius * 1.8 + 32;
    // display results with decimal value move to tenths place
    results.textContent =
      celsius + "°C converts to " + fahrenheit.toFixed(1) + "°F";
  }
});

resetButton.addEventListener("click", () => {
  // clear inputs
  fahrenheitInput.value = "";
  celsiusInput.value = "";
});

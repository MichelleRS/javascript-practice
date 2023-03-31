/* get DOM elements */
const multiplicationTableListEl = document.getElementById(
  "multiplicationTableList"
);
const tableNumberInput = document.getElementById("numberInput");
const buttonShowTable = document.getElementById("showMultTable");

/* button click event listener */
buttonShowTable.addEventListener("click", () => {
  // convert input value to a number
  let tableNumber = Number(tableNumberInput.value);

  if (tableNumber >= 1 && tableNumber <= 12) {
    // loop through all 12 multiplication sets and display results in list
    for (let i = 1; i <= 12; i++) {
      // calculate the result
      let resultNumber = tableNumber * i;

      // create a result string
      let resultString = i + " times " + tableNumber + " is " + resultNumber;

      // create new list item
      let listItem = document.createElement("li");

      // set the text of the new list item to the result string
      listItem.textContent = resultString;

      // add list item to the multiplication table list
      multiplicationTableListEl.appendChild(listItem);
    }
    // remove number from input
    tableNumberInput.value = "";
  } else {
    // TODO error handling
    // create a list element
    // write an error message
    // display error message before multiplication table list
  }
});

/* get DOM elements */
const mainEl = document.querySelector("main");
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
    /* error handling */
    // create a paragraph element
    let parEl = document.createElement("p");
    // create error message
    let errorMessage = document.createTextNode(
      "There was an error. Check that the value entered is a number from 1 through 12."
    );
    // append error message to par
    parEl.append(errorMessage);
    // insert error message at start of main
    // parent.insertBefore(newItem, target)
    mainEl.insertBefore(parEl, mainEl.firstChild);
  }
});

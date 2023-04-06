/* get DOM elements */
const form = document.getElementById("salesForm");

/* convert inputs to a number */
function getNumberFromInput(elementId) {
  // get the input element
  const element = document.getElementById(elementId);
  // get text from input element
  const text = element.value;
  // convert text into a number
  const result = Number(text);

  // TODO error handling

  return result;
}

/* sales data calculation functions */
// TODO calculate total
function getTotal(inputArray) {
  // set total to 0
  let total = 0;
  // TODO work through sales array
  // TODO add each sales value to the total
}

// TODO get highest sales number
// TODO get lowest sales number

function doCalc() {
  // initialize a sales variable as an array of sales numbers
  const sales = [];

  // set elements in sales array
  sales[0] = getNumberFromInput("inpShop01");
  sales[1] = getNumberFromInput("inpShop02");
  sales[2] = getNumberFromInput("inpShop03");
  sales[3] = getNumberFromInput("inpShop04");
  sales[4] = getNumberFromInput("inpShop05");
  sales[5] = getNumberFromInput("inpShop06");

  // get total of all sales
  let total = sales[0] + sales[1] + sales[2] + sales[3] + sales[4] + sales[5];

  // TODO call calculation functions

  // TODO insert sales data message with calculations into DOM

  return total;
}

/* events */
// TODO form submit event listener calling doCalc(), remove onclick event from html

/* --- * --- * --- NOTES --- * --- * --- */

/* tasks */
// [x] change naming convention from shop to sales
// [x] refactor doCalc() with array, change sales back to shop in html
// [] refactor sales total calculation as a function call
// [] function call for highest number
// [] function call for lowest number

// clo checklist
// [x] get form
// [x] get number from each input
// [x] get total of all sales
// [x] get array of sales

/* --- --- --- --- - * - --- --- --- --- */

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
// calculate total
function getTotal(inputArray) {
  // set total to 0
  let total = 0;
  // work through sales array
  for (let value of inputArray) {
    // for each element in the sales array, add value from input to total
    total = total + value;
  }
  return total;
}

// get highest sales number
function getHighestNumber(inputArray) {
  // set max to the first element
  let max = inputArray[0];

  // work through sales array
  for (let value of inputArray) {
    // if the value of an element is higher than the current max, set as the new max value
    if (value > max) {
      max = value;
    }
  }
  return max;
}

// get lowest sales number
function getLowestNumber(inputArray) {
  // set min to the first element
  let min = inputArray[0];
  // work through sales array
  for (let value of inputArray) {
    // if the value of an element is lower than the current min, set as the new min value
    if (value < min) {
      min = value;
    }
  }
  return min;
}

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

  // TODO call calculation functions
  // get total of all sales
  const totalSales = getTotal(sales);
  // get highest sales number
  const highestSales = getHighestNumber(sales);
  // get lowest sales number
  const lowestSales = getLowestNumber(sales);

  // TODO insert sales data message with calculations into DOM
}

/* events */
// TODO form submit event listener calling doCalc(), remove onclick event from html

/* --- * --- * --- NOTES --- * --- * --- */

/* tasks */
// [x] change naming convention from shop to sales
// [x] refactor doCalc() with array, change sales back to shop in html
// [x] refactor sales total calculation as a function call
// [x] function call for highest sales number
// [X] function call for lowest sales number

// clo checklist
// [x] get form
// [x] get number from each input
// [x] get total of all sales
// [x] get array of sales
// [x] get total sales
// [x] get highest sale
// [X] get lowest sale

/* --- --- --- --- - * - --- --- --- --- */

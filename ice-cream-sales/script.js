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
// TODO get highest sales number
// TODO get lowest sales number

function doCalc() {
  // initialize variables for each shop to hold number inputs
  const sales01 = getNumberFromInput("inpSales01");
  const sales02 = getNumberFromInput("inpSales02");
  const sales03 = getNumberFromInput("inpSales03");
  const sales04 = getNumberFromInput("inpSales04");
  const sales05 = getNumberFromInput("inpSales05");
  const sales06 = getNumberFromInput("inpSales06");

  // get total of all sales
  let total = sales01 + sales02 + sales03 + sales04 + sales05 + sales06;

  // TODO call calculation functions

  // TODO insert sales data message with calculations into DOM

  return total;
}

/* events */
// TODO form submit event listener calling doCalc(), remove onclick event from html

/* --- * --- * --- NOTES --- * --- * --- */

/* current tasks */
// change naming convention from shop to sales
// refactor doCalc() with array to store sales values

// clo checklist
// [x] get form
// [x] get number from each input
// [x] get total of all sales

/* --- --- --- --- - * - --- --- --- --- */

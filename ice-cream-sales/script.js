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
  const shop01 = getNumberFromInput("inpShop01");
  const shop02 = getNumberFromInput("inpShop02");
  const shop03 = getNumberFromInput("inpShop03");
  const shop04 = getNumberFromInput("inpShop04");
  const shop05 = getNumberFromInput("inpShop05");
  const shop06 = getNumberFromInput("inpShop06");

  // get total of all sales
  let total = shop01 + shop02 + shop03 + shop04 + shop05 + shop06;

  // TODO call calculation functions

  // TODO insert sales data message with calculations into DOM

  return total;
}

/* events */
// TODO form submit event listener calling doCalc(), remove onclick event from html

/* NOTES */
// clo checklist
// [x] get form
// [x] get number from each input
// [x] get total of all sales

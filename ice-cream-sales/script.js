/* get DOM elements */
const form = document.getElementById("salesForm");

/* functions */
function getNumberFromInput(elementId) {
  // get the input element
  const element = document.getElementById(elementId);
  // get text from input element
  const text = element.value;
  // convert text into a number
  const result = Number(text);

  return result;
}

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

  return total;
}

/* events */
// TODO form submit event listener

/* NOTES */
// clo checklist
// [x] get form
// [x] get number from each input
// [x] get total of all sales

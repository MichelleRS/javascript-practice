/* get DOM elements */
const form = document.getElementById("salesForm");
const salesDataHeading = document.getElementById("salesData");
let allInputEl = document.querySelectorAll("input");
const button = document.getElementById("btnCalc");

/* convert inputs to a number */
function getNumberFromInput(elementId) {
  // get the input element by id
  const element = document.getElementById(elementId);
  // get text from input element
  const text = element.value;
  // convert text into a number
  const result = Number(text);

  /* error handling */
  // if not a number
  if (isNaN(result)) {
    alert("Error. Check that sales inputs are numbers in the 0-10000 range.");
    return NaN;
  }

  // numbers outside range
  let maxAttrValue = element.getAttribute("max");
  let minAttrValue = element.getAttribute("min");

  if (result > maxAttrValue || result < minAttrValue) {
    alert("Error. Check that sales inputs are numbers in the 0-10000 range.");
    return NaN;
  }

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

/* events */
// form submit event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  /* sales array */
  // initialize a variable for sales and set to empty array
  sales = [];

  allInputEl.forEach((inputEl) => {
    // get each input by id and convert to a number
    let sale = getNumberFromInput(inputEl.id);
    // push numbers into sales array
    sales.push(sale);
  });

  /* call calculation functions */
  // get total of all sales
  const totalSales = getTotal(sales);
  // get highest sales number
  const highestSales = getHighestNumber(sales);
  // get lowest sales number
  const lowestSales = getLowestNumber(sales);

  /* insert sales data message with calculations into DOM */
  // initialize an empty string for message
  let message = "";

  // create a new paragraph element node
  let par = document.createElement("p");
  // create a text node
  message = document.createTextNode(
    "The total sales is " +
      totalSales +
      ". The highest sales number is " +
      highestSales +
      ", and the lowest sales number is " +
      lowestSales +
      "."
  );
  // add message to paragraph element
  par.appendChild(message);
  // add paragraph element to the DOM; show after sales data heading
  salesDataHeading.after(par);
});

// TEST display function: insert par element as first child of form, before button element
/*
function displayTest() {
  console.log("hello! the page loaded!");
  // create a new paragraph element node
  let par = document.createElement("p");

  // create a test message text node (hello, hello)
  let testMessage = document.createTextNode("Hello hello!");
  // add test message to paragraph element
  par.appendChild(testMessage);
  // insert par element as first element in form (before button)
  form.insertBefore(par, form.firstChild);
}

// TEST call displayTest()
displayTest();
*/

function makeDivCtrl(labelText) {
  /* parent element */
  // create a div, which will hold each label and input
  let divEl = document.createElement("div");
  // assign a class of "control"
  divEl.className = "control";

  /* children elements */
  /* create label element */
  let labelEl = document.createElement("label");
  // set attribute value
  labelEl.setAttribute("for", labelText);
  // create text node for label
  let text = document.createTextNode(labelText);
  // append text node to label
  labelEl.appendChild(text);
  console.log("labelEl", labelEl);

  /* create input element */
  let inputEl = document.createElement("input");
  // set attribute values
  inputEl.setAttribute("type", "number");
  inputEl.setAttribute("name", labelText);
  inputEl.setAttribute("id", labelText);
  inputEl.setAttribute("min", 0);
  inputEl.setAttribute("max", 10000);
  console.log("inputEl", inputEl);

  // append child elements to parent element
  divEl.append(labelEl, inputEl);
  console.log("divEl", divEl);

  // insert div parent element as first element in form
  form.insertBefore(divEl, form.firstChild);

  return divEl;
}

// function build sales input items,
function doBuildSalesInputItems(numOfItems) {
  for (let itemCount = 1; itemCount <= numOfItems; itemCount = itemCount + 1) {
    // build label for item
    let labelText = "Shop " + itemCount;
    // get the div parent element
    let item = makeDivCtrl(labelText);
    // insert div parent element as first element in form
    form.insertBefore(item, form.firstChild);
  }
}

doBuildSalesInputItems(6);
/* --- * --- * --- NOTES --- * --- * --- */

/* tasks */
// [x] change naming convention from shop to sales
// [x] refactor doCalc() with array, change sales back to shop in html
// [x] refactor sales total calculation as a function call
// [x] function call for highest sales number
// [X] function call for lowest sales number
// [x] get message
// [x] refactor on button click to on form submit event listener
// [x] on form submit, show sales data message
// [x] refactor method used for adding par el to DOM
// [x] refactor sales array
/* update: rendering to the DOM */
// [x] plan tasks
// [x] plan rendered elements in HTML comments
// [x] test rendering in form
// [] build makeDivCtrl() to create a div parent element with label and input as children
// [] build doBuildSalesInputItems() function that generates divs using a for loop
// [] append divs at start of form (before button)
// [] on page load, render sales input items
// [] improve code organization: DOM elements, edit/add comments, remove gets from clo checklist,
// [] migrate tasks and clo checklist to README as sections; add Table of Contents

// clo checklist
// [x] get form
// [x] get number from each input
// [x] get total of all sales
// [x] get array of sales
// [x] get total sales
// [x] get highest sale
// [X] get lowest sale
// [x] get message
// [x] get all inputs
// [x] get sale
// [x] get displayTest() on page load
// [x] get test message
// [x] get button
// [x] get test message to show before button
// [x] get label
// [x] get input
// [x] get div

/* --- --- --- --- - * - --- --- --- --- */

/* get DOM elements */
const salesDataHeading = document.getElementById("salesData");
const form = document.getElementById("salesForm");

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

  // get all rendered inputs elements from DOM
  let allInputEl = document.querySelectorAll("input");

  // loop through each input element
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

/* build DOM elements for form */
// make a div to contain each label and input
function makeDiv(labelText) {
  /* parent element */
  // create div element
  let divEl = document.createElement("div");
  // assign class of "control"
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

  /* create input element */
  let inputEl = document.createElement("input");
  // set attribute values
  inputEl.setAttribute("type", "number");
  inputEl.setAttribute("name", labelText);
  inputEl.setAttribute("id", labelText);
  inputEl.setAttribute("min", 0);
  inputEl.setAttribute("max", 10000);

  // append child elements to parent element
  divEl.append(labelEl, inputEl);

  // insert div parent element as first element in form
  form.insertBefore(divEl, form.firstChild);

  return divEl;
}

// make button element
function makeButton() {
  // create button element
  let buttonEl = document.createElement("button");

  // set attribute values
  buttonEl.setAttribute("type", "submit");
  buttonEl.setAttribute("id", "btnCalc");

  // create text node for button
  let text = document.createTextNode("Calculate Sales Data");

  // append text node to button
  buttonEl.appendChild(text);
  // append button to form
  form.append(buttonEl);

  return buttonEl;
}

// build sales form
function doBuildSalesForm(numOfInputs) {
  for (let inputCount = 1; inputCount <= numOfInputs; inputCount++) {
    // build label for item
    let labelText = "Shop " + inputCount;
    // get the div parent element
    let item = makeDiv(labelText);
    // insert div parent element as first element in form
    form.appendChild(item);
  }
  // get button element
  let button = makeButton();
  // append button to end of form
  form.append(button);
}

/* display function */
// function call to render sales form on page load
doBuildSalesForm(6);

// function to add numbers
function doAddition() {
  // get first number
  let num1Element = document.getElementById("first_number");
  let num1Text = num1Element.value;
  let num1 = Number(num1Text);

  // get second number
  let num2Element = document.getElementById("second_number");
  let num2Text = num2Element.value;
  let num2 = Number(num2Text);

  // add first and second number
  let total = num1 + num2;

  // get DOM element for displaying total
  let totalSpan = document.getElementById("total");

  // display total
  totalSpan.textContent = total;
}

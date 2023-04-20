/* get DOM elements */
const form = document.getElementById("contactsForm");
const findButton = document.getElementById("find");
const saveButton = document.getElementById("save");

/* state */
// hold contact data in array elements
const contactNames = [];
const contactAddresses = [];
const contactPhones = [];

/* events */
// button click: find
findButton.addEventListener("click", () => {
  // get the name value
  let name = getElementValue("name");
  // if name matches "Michelle", display values in form
  if (name == "Michelle") {
    displayElementValue("address", "123 Street\nCity, State Zip");
    displayElementValue("phone", "(123) 456-7890");
  }
  // if name is not "Michelle", show alert that contact is not found
  else {
    displayNotFound();
  }
});

// button click: save
saveButton.addEventListener("click", () => {
  alert("This will save contact");
});

/* helper functions */
function getElementValue(id) {
  // get the element being read
  let element = document.getElementById(id);
  // return the value in the element
  return element.value;
}

function displayElementValue(id, text) {
  // get the element being changed
  let element = document.getElementById(id);
  // set the value in the element
  element.value = text;
}

// store contact info in state at the given index value
function storeContact(pos) {
  // store name
  contactNames[pos] = getElementValue("name");
  // store address
  contactAddresses[pos] = getElementValue("address");
  // store phone
  contactPhones[pos] = getElementValue("phone");
}

// find contact position
function findContactPos(name) {
  // loop through each element in the contactNames array
  for (let pos = 0; pos < contactNames.length; pos++) {
    // check if stored element name matches name being searched
    if (contactNames[pos] == name) {
      // if name match found, return position in array
      return pos;
    }
  }
  // if name match not found, return Nan
  return NaN;
}

// display contact details as values in form
function displayContact(pos) {
  displayElementValue("name", contactNames[pos]);
  displayElementValue("address", contactAddresses[pos]);
  displayElementValue("phone", contactPhones[pos]);
}

function displayNotFound() {
  alert("Contact not found. Try searching again.");
}
/* --- * --- * --- NOTES --- * --- * --- *

clo checklist
[x] get form
[x] get buttons

* --- --- --- --- - * - --- --- --- --- */

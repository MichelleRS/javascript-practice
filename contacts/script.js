/* get DOM elements */
const form = document.getElementById("contactsForm");
const findButton = document.getElementById("find");
const saveButton = document.getElementById("save");

/* state */
// hold contact data in array elements
let contactNames = [];
let contactAddresses = [];
let contactPhones = [];

/* events */
// button click: find
findButton.addEventListener("click", () => {
  // get the name value
  const name = getElementValue("name");

  // find the position of the name
  const pos = findContactPos(name);

  // if contact does not exist, show alert that contact is not found
  if (isNaN(pos)) {
    displayNotFound();
  }
  // if name matches, display values in form
  else {
    displayContact(pos);
  }
});

// button click: save
saveButton.addEventListener("click", () => {
  // get the name of the contact being saved
  let name = getElementValue("name");

  // find the position of the name to save
  let pos = findContactPos(name);

  // if contact name does not exist, add to contactNames
  if (isNaN(pos)) {
    pos = contactNames.length;
  }

  // update the contact info for an existing contact
  storeContact(pos);
  console.log("contactNames", contactNames);
  console.log("contactAddresses", contactAddresses);
  console.log("contactPhones", contactPhones);
});

/* helper functions */
// use to get DOM elements
function getElementValue(id) {
  // get the element being read
  let element = document.getElementById(id);
  // return the value in the element
  return element.value;
}

// use to display text values
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
[x] get saved contact name
[x] get position of saved contact name
[x] get contact data


* --- --- --- --- - * - --- --- --- --- */

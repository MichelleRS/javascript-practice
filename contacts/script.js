/* get DOM elements */
const form = document.getElementById("contactsForm");
const findButton = document.getElementById("find");
const saveButton = document.getElementById("save");

/* state */
// store contact data in an array
let contactData = [];

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
    pos = contactData.length;
  }

  // update the contact info for an existing contact
  storeContact(pos);
  console.log("contactData", contactData);
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

// store contact data in state at the given index value
function storeContact(pos) {
  // create an empty object
  let contact = {};

  /* contact data to store */
  // name
  contact.name = getElementValue("name");
  // address
  contact.contactAddress = getElementValue("address");
  // phone
  contact.phone = getElementValue("phone");

  // store contact data in an array and set to contact
  contactData[pos] = contact;
}

// TODO find contact position
function findContactPos(name) {
  // loop through each element in the contactData array
  for (let pos = 0; pos < contactData.length; pos++) {
    // check if stored element name matches name being searched
    if (contactData[pos] == name) {
      // if name match found, return position in array
      return pos;
    }
  }
  // if name match not found, return Nan
  return NaN;
}

// TODO display contact details as values in form
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
[x] get contact data after refactor


* --- --- --- --- - * - --- --- --- --- */

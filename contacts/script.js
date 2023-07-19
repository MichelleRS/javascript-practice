/* imports */
import data from "./data.js";
import { renderElement } from "./render-utils.js";

/* get data */
const dataSchema = data;

/* get DOM elements */
const form = document.getElementById("contactsForm");
const findButton = document.getElementById("find");
const saveButton = document.getElementById("save");

/* state */
// store contact data in an array
let contactData = [];

// declare variable to store the name in local storage
let storeName;

/* events */
window.addEventListener("load", () => {
  // function call to render form
  fetchAndDisplayForm();
  // function call to load contact data stored locally
  loadContactData();
});

// button click: find
findButton.addEventListener("click", () => {
  // get the name value
  let name = getElementValue("name");

  // find the position of the name
  let pos = findContactPos(name);

  // if contact does not exist, show alert that contact is not found
  if (isNaN(pos)) {
    displayNotFound();
  }
  // if name matches, display values in form
  else {
    displayContact(pos);
  }
});

// button click: store contact data and reset form
saveButton.addEventListener("click", () => {
  // get the name of the contact being saved
  let name = getElementValue("name");

  // find the position of the name to save
  let pos = findContactPos(name);

  // if contact name does not exist, add to contactNames
  if (isNaN(pos)) {
    pos = contactData.length;
  }

  // update the contact data for an existing contact
  storeContact(pos);

  // reset form
  form.reset();
});

/* functions */
async function fetchAndDisplayForm() {
  // loop, render, append: for each item in data schema, create a containing element and append to form
  for (let item of dataSchema) {
    // make a containing element for item
    let itemElement = renderElement(item);
    // append containing element to form
    form.appendChild(itemElement);
  }
}

// save contact in local storage
function saveContactData() {
  // convert the contacts to a string
  let storeJson = JSON.stringify(contactData);
  // store the string in local storage
  localStorage.setItem(storeName, storeJson);
}

// load contacts
function loadContactData() {
  // get the string from local storage
  let dataString = localStorage.getItem(storeName);
  // check for empty string
  if (dataString === null) {
    contactData = [];
    return false;
  }
  // convert string back into an object
  contactData = JSON.parse(dataString);
  return true;
}

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
  contact.address = getElementValue("address");
  // phone
  contact.phone = getElementValue("phone");

  // store contact data in an array and set to contact
  contactData[pos] = contact;
  // function call to save contact
  saveContactData();
}

// find contact position
function findContactPos(name) {
  // loop through each element in the contactData array
  for (let pos = 0; pos < contactData.length; pos++) {
    // initialize variable for contact name
    let nameData = contactData[pos].name;
    // check if stored element name matches name being searched
    if (nameData == name) {
      // if name match found, return position in array
      return pos;
    }
  }
  // if name match not found, return Nan
  return NaN;
}

// display contact data as values in form
function displayContact(pos) {
  let contact = contactData[pos];

  displayElementValue("name", contact.name);
  displayElementValue("address", contact.address);
  displayElementValue("phone", contact.phone);
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

tasks
[x] clear display on save
* --- --- --- --- - * - --- --- --- --- */

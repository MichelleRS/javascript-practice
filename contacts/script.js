/* get DOM elements */
const form = document.getElementById("contactsForm");
const findButton = document.getElementById("find");
const saveButton = document.getElementById("save");

/* events */
// button click: find
findButton.addEventListener("click", () => {
  let name = getElementValue("name");
  if (name == "Michelle") {
    displayElementValue("address", "123 Street\nCity, State Zip");
    displayElementValue("phone", "(123) 456-7890");
  } else {
    displayNotFound();
  }
});

// button click: save
saveButton.addEventListener("click", () => {
  alert("This will save contact");
});

/* functions */
function displayElementValue(id, text) {
  let element = document.getElementById(id);
  element.value = text;
}

function displayNotFound() {
  alert("Contact not found. Try searching again.");
}

function getElementValue(id) {
  let element = document.getElementById(id);
  return element.value;
}

/* --- * --- * --- NOTES --- * --- * --- *

clo checklist
[x] get form
[x] get buttons

* --- --- --- --- - * - --- --- --- --- */

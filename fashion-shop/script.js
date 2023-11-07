/* global DOM elements */
// declare variable for the html element that contains user interface
let mainPage;
// declare variable for the form element for adding stock to store
let formEl;

/* events */
window.addEventListener("load", () => {
  console.log("Hello!! The page has loaded.");

  doStartFashionShop();
});

/* render functions */
// render page title
function renderPageTitle(title) {
  console.log("Hello from renderPageTitle()!");

  let titleEl = document.createElement("h2");
  titleEl.innerText = title;
  titleEl.className = "pageTitle";
  mainPage.appendChild(titleEl);
}

// render list of items for main menu navigation
function renderMainMenu(schema) {
  console.log("Hello from renderMainMenu()!!");

  // create a container for list
  let listEl = document.createElement("ul");
  // add class name to list element
  listEl.className = "mainMenu";

  // loop through items in schema
  for (const listItem of schema) {
    // get type of item
    let itemType = listItem.type;

    // create a list item element
    let listItemEl = document.createElement("li");
    // add class name to list item element
    listItemEl.className = "mainMenuItem";

    // create a button element
    let buttonEl = document.createElement("button");
    buttonEl.innerText = listItem.label;
    // add class name to button
    buttonEl.className = "mainMenuItemButton";
    // append button to list item element
    listItemEl.appendChild(buttonEl);
    // listen for click: function call to perform action
    buttonEl.setAttribute("onclick", listItem.func);
    console.log("listItem.func", listItem.func);
    console.log("typeof listItem.func", typeof listItem.func);

    // append list item element to list
    listEl.appendChild(listItemEl);
  }
  // append list element to main page
  mainPage.appendChild(listEl);
}

// render form for adding stock to store
function renderFormElement() {
  formEl = document.createElement("form");
  formEl.setAttribute("id", "stockForm");
  console.log("In renderFormElement: formEl", formEl);
  return formEl;
}

// render buttons for adding stock form
function renderFormButtons(schema) {
  // loop through items in schema
  for (let button of schema) {
    let buttonEl = document.createElement("button");
    buttonEl.innerText = button.label;
    buttonEl.setAttribute("onclick", button.func);
    // append to form
    formEl.appendChild(buttonEl);
  }
}

/* functions for main menu click events */
function doAddDress() {
  document.body.style.backgroundColor = "darkblue";
  addStock(Dress);
}

function doAddPants() {
  document.body.style.backgroundColor = "pink";
  addStock(Pants);
}

// function: displays form and buttons for adding stock to store
function addStock(StockClass) {
  activeItem = new StockClass();
  // show page title
  openPage(`Add ${activeItem.type}`);
  // render empty form element
  formEl = renderFormElement();
  mainPage.appendChild(formEl);
  // getHTML = getFormControls
  activeItem.getHTML(formEl);
  // append save and cancel buttons to form
  renderFormButtons([
    {
      label: "Save",
      func: "doSaveAdd()",
    },
    {
      label: "Cancel",
      func: "doCancelAdd()",
    },
  ]);
}

/* functions */

// function: open user interface for main page
function openPage(title) {
  console.log("Hello from openPage()!!");
  // TODO clear previous page

  // render page title
  renderPageTitle(title);
}

// function: display main menu
function doShowMainMenu() {
  console.log("Hello from doShowMainMenu()!!");
  // clear previous page and show title
  openPage("Main Menu");
  // show menu items
  renderMainMenu([
    {
      type: "Dress",
      label: "Add Dress",
      func: "doAddDress()",
    },
    {
      type: "Pants",
      label: "Add Pants",
      func: "doAddPants()",
    },
  ]);
}

// function: add stock save button
function doSaveAdd() {
  console.log("Hello from doSaveAdd()");
}

// function: cancel adding stock
function doCancelAdd() {
  console.log("Hello from doCancelAdd()");
}

// function: start app

function doStartFashionShop() {
  console.log("Hello from doStartFashionShop()!!");
  mainPage = document.getElementById("mainPage");
  console.log("mainPage", mainPage);
  formEl = document.getElementById("stockForm");
  console.log("doStart: formEl", formEl);

  doShowMainMenu();
}

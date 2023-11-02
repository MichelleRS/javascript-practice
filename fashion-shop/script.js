/* global variables */
// declare variable for the html element that contains user interface
let mainPage;

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

    // listen for button click
    buttonEl.addEventListener("click", () => {
      console.log("CLICK!!");
      console.log("buttonEl", buttonEl);
      console.log("itemType", itemType);
      console.log("listItem", listItem);
      // TODO decide what function to call based on item type
      switch (itemType) {
        case "Dress":
          console.log("I want to add a DRESS!!");
          console.log("listItem.func", listItem.func);
          break;

        case "Pants":
          console.log("I want to add PANTS!!");
          console.log("listItem.func", listItem.func);
          break;
      }
    });

    // append list item element to list
    listEl.appendChild(listItemEl);
  }
  // append list element to main page
  mainPage.appendChild(listEl);
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

// function: start app

function doStartFashionShop() {
  console.log("Hello from doStartFashionShop()!!");
  mainPage = document.getElementById("mainPage");
  console.log("mainPage", mainPage);

  doShowMainMenu();
}

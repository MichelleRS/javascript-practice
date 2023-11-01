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
  let titleEl = document.createElement("h2");
  titleEl.innerText = title;
  titleEl.className = "pageTitle";
  mainPage.appendChild(titleEl);
}

// TODO render items for main menu navigation

/* functions */

// function: open user interface for main page
function openPage(title) {
  // TODO clear previous page

  // render page title
  renderPageTitle(title);
}

// function: display main menu
function doShowMainMenu() {
  console.log("Hello from doShowMainMenu()!!");
  // clear previous page and show title
  openPage("Main Menu");
  // TODO show menu items
}

// function: start app
function doStartFashionShop() {
  console.log("Hello from doStartFashionShop()!!");
  mainPage = document.getElementById("mainPage");
  console.log("mainPage", mainPage);

  doShowMainMenu();
}

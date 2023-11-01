/* global variables */
// declare variable for the html element that contains user interface
let mainPage;

/* events */
window.addEventListener("load", () => {
  console.log("Hello!! The page has loaded.");
  doStartFashionShop();
});

/* functions */

// function: open user interface for main page
function openPage(title) {
  // TODO clear previous page

  // get page title
  let titleEl = document.createElement("h2");
  titleEl.innerText = title;
  titleEl.className = "pageTitle";
  mainPage.appendChild(titleEl);
}

// function: display main menu
function doShowMainMenu() {
  console.log("Hello from doShowMainMenu()!!");
  openPage("Main Menu");
}

// function: start app
function doStartFashionShop() {
  console.log("Hello from doStartFashionShop()!!");
  mainPage = document.getElementById("mainPage");
  console.log("mainPage", mainPage);

  doShowMainMenu();
}

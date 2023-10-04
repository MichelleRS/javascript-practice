/* get DOM elements*/
// get card template
const cardTemplate = document.querySelector("[data-card-template]");
// get cards container
const cardsContainer = document.querySelector("[data-user-cards-container]");
// get search input
const searchInput = document.querySelector("[data-search-input]");

/* state */
// initialize variable to store array of users
let users = [];

// get users
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    // loop through data for each user
    users = data.map((user) => {
      // get card template and its children elements
      const card = cardTemplate.content.cloneNode(true).children[0];
      // get name element and set text to user name
      const nameEl = card.querySelector("[data-name]");
      nameEl.textContent = user.name;
      // get email element and set text to user email
      const emailEl = card.querySelector("[data-email]");
      emailEl.textContent = user.email;
      // append card to cards container
      cardsContainer.append(card);
      // return user object with name, email, and card element
      return { name: user.name, email: user.email, element: card };
    });
  });

/* event listener */
searchInput.addEventListener("input", (e) => {
  // get typed value from input and convert to lower case
  const value = e.target.value.toLowerCase();
  // hide users that do not match the value in search input
  users.forEach((user) => {
    console.log("user.element", user.element);
    // if name or email matches the value in search input, isMatch is set to true
    const isMatch =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    // if isMatch value is false, hide user card element
    // if (!isMatch) {
    //   user.element.classList.toggle("hide", true);
    // }
    user.element.classList.toggle("hide", !isMatch);
  });
});

window.addEventListener("load", () => {
  console.log("Hello! The page loaded.");
});

/* get DOM elements*/
// get card template
const cardTemplate = document.querySelector("[data-card-template]");
// get cards container
const cardsContainer = document.querySelector("[data-user-cards-container]");

// get user data
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    // loop through data for each user
    data.forEach((user) => {
      // get card template
      const card = cardTemplate.content.cloneNode(true).children[0];
      // name
      const nameEl = card.querySelector("[data-name]");
      nameEl.textContent = user.name;
      // email
      const emailEl = card.querySelector("[data-email]");
      emailEl.textContent = user.email;
      // append card to cards container
      cardsContainer.append(card);
    });
  });

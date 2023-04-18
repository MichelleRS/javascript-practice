export function renderCard(sketch) {
  /* parent element */
  // create li container
  const li = document.createElement("li");

  /* child elements */
  // create h3 element for episode title
  const title = document.createElement("h3");
  const titleText = document.createTextNode(sketch.title);
  title.appendChild(titleText);

  // create p element for season, episode
  const details = document.createElement("p");
  const detailsText = document.createTextNode(
    "Season " + sketch.season + ", " + "Episode " + sketch.episode
  );
  details.appendChild(detailsText);

  /* append child elements to parent element */
  li.append(title, details);

  /* return parent element */
  return li;
}

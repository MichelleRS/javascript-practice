export function renderCard(sketch) {
  /* parent element */
  // create li container
  const li = document.createElement("li");

  /* child elements */
  // create h3 element for episode title
  const title = document.createElement("h3");
  const titleText = document.createTextNode(sketch.title);
  title.appendChild(titleText);
  // TODO create p elements for: season, episode number

  /* append child elements to parent element */
  li.append(title);

  // return parent element
  return li;
}

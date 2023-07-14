export function renderElement(description) {
  // create container for element
  const div = document.createElement("div");
  div.setAttribute("id", "control");

  /* label */
  // create label element
  const labelEl = document.createElement("label");
  // append label text
  const labelText = document.createTextNode(description.label + ":");
  labelEl.appendChild(labelText);
  // label element attributes
  labelEl.setAttribute("for", description.id);
  // append label element to container element
  div.appendChild(labelEl);

  /* input */
  // declare input element
  let inputEl;
  // decide what type of input element to build
  switch (description.type) {
    case "input":
      inputEl = document.createElement("input");
      break;
    case "textarea":
      inputEl = document.createElement("textarea");
      // text area attributes
      inputEl.setAttribute("col", description.col);
      inputEl.setAttribute("rows", description.rows);
      break;
  }
  // input element attributes
  inputEl.setAttribute("id", description.id);
  inputEl.setAttribute("autocomplete", description.autocomplete);
  // append input element to container element
  div.appendChild(inputEl);

  // return container
  return div;
}

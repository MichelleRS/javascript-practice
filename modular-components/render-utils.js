export function renderComponentOne() {
  // create div element
  let divEl = document.createElement("div");
  // set id attribute
  divEl.setAttribute("id", "componentOne");

  // create h2 element
  let h2El = document.createElement("h2");
  // create text node for h2
  let h2Text = document.createTextNode("Component One");
  // append text node to h2El
  h2El.appendChild(h2Text);

  // create button element
  let buttonEl = document.createElement("button");
  // set id attribute
  buttonEl.setAttribute("id", "componentOneButton");
  // create text node for button
  let buttonText = document.createTextNode("Next Page");
  // append text node to buttonEl
  buttonEl.appendChild(buttonText);

  // append h2 and button to div
  divEl.append(h2El, buttonEl);

  return divEl;
}

export function renderComponentTwo() {
  // create div element
  let divEl = document.createElement("div");
  // set id attribute
  divEl.setAttribute("id", "componentTwo");

  // create h2 element
  let h2El = document.createElement("h2");
  // create text node for h2
  let h2Text = document.createTextNode("Component Two");
  // append text node to h2El
  h2El.appendChild(h2Text);

  // create button element
  let buttonEl = document.createElement("button");
  // set id attribute
  buttonEl.setAttribute("id", "componentTwoButton");
  // create text node for button
  let buttonText = document.createTextNode("Go Back");
  // append text node to button
  buttonEl.appendChild(buttonText);

  // append h2 and button to div
  divEl.append(h2El, buttonEl);

  // return
  return divEl;
}

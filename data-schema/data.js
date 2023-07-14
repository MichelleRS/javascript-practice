export default [
  // name
  {
    id: "name",
    type: "input",
    prompt: "Name:",
    autocomplete: "name",
  },
  // address
  {
    id: "address",
    type: "textarea",
    prompt: "Address",
    autocomplete: "street-address",
    col: "40",
    rows: "5",
  },
  // phone
  {
    id: "phone",
    type: "input",
    prompt: "Phone",
    autocomplete: "tel",
  },
];

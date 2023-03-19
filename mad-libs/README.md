# Mad Libs

## MVP Goal

Prompt users to input information, then show their inputs with text that displays after clicking submit.

## Status

- MVP complete

## Accessibility

I'm using this project to practice building accessible forms. Here are some things I focused on:

- Instructions and error message displayed before the `form` element.

- Use of the `label` element to explicitly associate text prompts with inputs. Includes a `for` attribute that matches the `id` of the input.

- Use of the `required` attribute to prevent form submission if there are empty inputs.

- Use of the `aria-required` attribute to "support web browsers that don’t communicate the `required` attribute to assistive technology." _(WAI)_

## Areas Needing Improvement

- For browsers that do not support the `required` attribute:
  - Hide results if there is an error
  - Improve error messages to include error text and a visual cue for each error

## Resources

[_Forms, Hiding and Showing Elements, and the Event Object._](https://www.learnhowtoprogram.com/introduction-to-programming/javascript-and-web-browsers/forms-hiding-and-showing-elements-and-the-event-object) Epicodus. Accessed March 2023.

["User Notification"](https://www.w3.org/WAI/tutorials/forms/notifications/) in _Forms Tutorial._ Web Accessibility Initiative (WAI). Accessed March 2023.

["Validating Input"](https://www.w3.org/WAI/tutorials/forms/validation/) in _Forms Tutorial._ Web Accessibility Initiative (WAI). Accessed March 2023.

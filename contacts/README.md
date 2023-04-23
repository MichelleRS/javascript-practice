# Contacts App

## MVP Goal

Build a contact form with inputs for name, address, and phone number. Include button events for storing and finding contacts.

## Status

- _In progress_

## Fixes

1. > The specified value "(123) 456-7890" cannot be parsed, or is out of range.

   - Solution: Change phone input type from number to text.
     Source: [_Why the number input is the worst input._](https://stackoverflow.blog/2022/12/26/why-the-number-input-is-the-worst-input/) Stack Overflow. December 26, 2022.

2. On save, contact data (name, address, phone) is replacing previous saved data and not being added as new data in an array.

## Resources

Miles, Rob. "Objects" in _Begin to Code with JavaScript_. Pearson Education, Inc., 2022.

### Accessibility: Autocomplete

[_HTML attribute: autocomplete._](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) MDN Web Docs.

[_Input Purposes._](https://www.w3.org/TR/WCAG21/#input-purposes) Web Content Accessibility Guidelines (WCAG) 2.1. Accessed April 2023.

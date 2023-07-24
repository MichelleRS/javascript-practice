# Contacts App

## MVP Goal

Build a contact form with inputs for name, address, and phone number. Include button events for storing and finding contacts.

## Status

- MVP complete
- Added features:
  - Contact data is saved in local storage
  - Find contacts using first letter or part of name

## Fixes

1. > The specified value "(123) 456-7890" cannot be parsed, or is out of range.

   - Solution: Change phone input type from number to text.

     - Source: [_Why the number input is the worst input._](https://stackoverflow.blog/2022/12/26/why-the-number-input-is-the-worst-input/) Stack Overflow. December 26, 2022.

2. On save, contact data (name, address, phone) is replacing previously saved data and not being added as new data in an array.

   - Solution: Change save button `type` from `submit` to `button`.

     > If your buttons are not for submitting form data to a server, be sure to set their type attribute to button. Otherwise they will try to submit form data and to load the (nonexistent) response, possibly destroying the current state of the document.

     - Source: [_<button\>: The Button element._](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) MDN Web Docs. Accessed April 2023.

3. On find, contact address is displaying `undefined`.

   - Solution: In `storeContact()`, the property for storing an address was mistyped as `contact.contactAddress`. Changed to `contact.address`.
     - Source: Running the debugger in VS Code.

4. After adding a `toLowerCase()` method to the for loop in `findContactPos()`, console is logging an error:

   > TypeError: Cannot read properties of undefined (reading 'toLowerCase') at findContactPos

   - Solution: The loop stops because the first item in contactData does not have a `name` key, so it is returning `undefined`. Adding a `continue` statement allows the loop to continue on to the next iteration.

   ```
   if (nameData === undefined) {
      continue;
    }
   ```

## Resources

Miles, Rob. "Objects" in _Begin to Code with JavaScript_. Pearson Education, Inc., 2022.

### Accessibility: Autocomplete

[_HTML attribute: autocomplete._](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) MDN Web Docs.

[_Input Purposes._](https://www.w3.org/TR/WCAG21/#input-purposes) Web Content Accessibility Guidelines (WCAG) 2.1. Accessed April 2023.

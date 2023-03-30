# List Loop

## MVP Goal

Use a `for` loop to iterate through list elements (children) in an unorganized list (container).

Includes:

- Unorganized list of _I Think You Should Leave_ Season 2 sketches
- On button click, an asterisk and color change is added to show sketches with Tim Robinson

## Status

- Complete with change made to MVP Goal:
  - button click event shows sketches with Tim Robinson
  - button click event shows all sketches

## Fixes

1. Only first asterisk renders in list

   **Solution:** Remove empty `span` elements from list items and append `span` in JavaScript loop.

## Notes to Self

- `cmd` + `shift` + `l` selects all occurrences of a highlighted word

- After reviewing parts of Chapter 5 in Duckett's book (see [Resources](#resources)), I decided to:
  - remove the empty `span` elements in HTML
  - use `.createTextNode()` instead of `.textContent` to add the asterisk to the span element

## Resources

Duckett, Jon. _JavaScript and jQuery: Interactive Front-End Web Development_. John Wiley & Sons, Inc., 2014, pp. 218-227.

Lampron, J. [_I Think You Should Leave Database._](https://www.itysldb.com/). Accessed March 2023.

Miles, Rob. "Making Decisions in Programs" in _Begin to Code with JavaScript_. Pearson Education, Inc., 2022.

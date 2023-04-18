# I Think You Should Leave Sketches

## MVP Goal

Render a list of all sketches from _I Think You Should Leave_.

## Status

- MVP complete
- Button click events in progress

## Task Planning

- [x] Build `sketch-data.js` file that includes the following for each sketch:
  - id, season, episode, title, includesTim
- [x] In `render-utils.js`, make a card for each sketch using data from `sketch-data.js`
- [x] Loop through data in `script.js` to display data as rendered elements on page load

## Fixes

1. > Uncaught SyntaxError: Cannot use import statement outside a module

   Solution: Add `type="module"` to `script` element in HTML.

   Source: [_RunJS - How to solve: cannot use import statement outside a module._](https://runjs.app/blog/how-to-solve-cannot-use-import-statement-outside-a-module)

## Resources

- Lampron, J. [_I Think You Should Leave Database._](https://www.itysldb.com/). Accessed April 2023.

### My Repos

- Projects in this repo:

  - [Ice Cream Sales](../ice-cream-sales/README.md)
  - [List Loop](../list-loop/README.md)

- [Import and Display List](https://github.com/MichelleRS/wk-03-spotlight-deliverable-import-and-display-list/tree/dev)

- [Array Methods](https://github.dev/MichelleRS/react-wk02-spotlight-array-methods/tree/dev)

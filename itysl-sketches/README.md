# I Think You Should Leave Sketches

## MVP Goal

Render a list of all sketches from _I Think You Should Leave_.

## Status

- _MVP in progress_

## Task Planning

- [] Build `sketch-data.js` file that includes the following for each sketch:
  - id, season, episode, title, includesTim
- [] In `render-utils.js`, make a card for each sketch using data from `sketch-data.js`
- [] Loop through data in `script.js` to display data as rendered elements on page load

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

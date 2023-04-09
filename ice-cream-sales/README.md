# Ice Cream Sales

## MVP Goal

The user of the app is the owner of six ice cream shops. User can input the sales value from each shop and on form submit get:

- the total sales from all shops
- highest selling sales number
- lowest selling sales number

## Status

- MVP complete

## Fixes

1. > `Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.`

   **Solution:** In form event listener, `message` was set to a string. To fix, I set `message` to a new text node using `document.createTextNode()`.

## Resources

Miles, Rob. "Chapter 8: Storing Data" in _Begin to Code with JavaScript_. Pearson Education, Inc., 2022.

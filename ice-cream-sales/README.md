# Ice Cream Sales

## MVP Goal

The user of the app is the owner of six ice cream shops. User can input the sales value from each shop and on form submit get:

- the total sales from all shops
- highest selling sales number
- lowest selling sales number

### Update

- instead of hardcoding each input and label, insert elements in the DOM
- generate inputs and their labels using a `for loop`

## Status

- MVP complete
- _Update in progress_

## Fixes

1. > `Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.`

   **Solution:** In form event listener, `message` was set to a string. To fix, I set `message` to a new text node using `document.createTextNode()`.

## Resources

Miles, Rob. "Chapter 8: Storing Data" in _Begin to Code with JavaScript_. Pearson Education, Inc., 2022.

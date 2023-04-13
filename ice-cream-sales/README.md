# Ice Cream Sales

## MVP Goal

The user of the app is the owner of six ice cream shops. User can input the sales value from each shop and on form submit get:

- the total sales from all shops
- highest selling sales number
- lowest selling sales number

### Updates

- instead of hardcoding `form` in HTML, build in JavaScript
- generate inputs and their labels using a `for loop`

## Status

- MVP complete
- Updates complete

## Fixes

1. > `Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.`

   **Solution:** In form event listener, `message` was set to a string. To fix, I set `message` to a new text node using `document.createTextNode()`.

2. After update, shops display in decreasing number order instead of increasing.

   **Solution:** In the `for loop`, the `.insertBefore()` method was being used, which was adding each input to the start of the list. Changed this to the `.appendChild()` method, which adds new items to end of list.

3. After update, data calculations broken after building `form` in JavaScript. The original code had hardcoded inputs in the HTML that were called as a global variable at the top of `script.js`. Since the refactored inputs were built in JavaScript, the code was being told to get inputs before they existed.

   **Solution:** Get inputs inside the `form` event listener.

   **Lesson Learned** Be more aware of my architecture. Be sure I am retrieving DOM elements that are actually there first.

## Resources

Miles, Rob. "Chapter 8: Storing Data" in _Begin to Code with JavaScript_. Pearson Education, Inc., 2022.

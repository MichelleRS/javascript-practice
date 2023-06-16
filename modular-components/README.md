# Modular Components

## Project Status

- MVP complete

## MVP Goal

- Toggle between two div components

## Fixes

> Uncaught (in promise) DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.

Got this message while attempting to append and remove the component divs from the DOM. Refactoring with the `toggle()` method fixed the issue.

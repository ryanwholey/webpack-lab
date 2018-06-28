# AMD (browser require)

## Summary
Module pattern used mostly on in the browser, made popular by require.js and dojo.
Uses xhr to request files asynchronously and parse them on the fly.

## Interesting
- Moved the ordering problem into javascript with the implementation of the dependency array
- Asynchronous module loading (great for users in the browser!)
- Most current implementations avoid using eval to read code, probably something like using the Function constructor instead
- This is the reason that sometimes our old jasmine test suite would time out


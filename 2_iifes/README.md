# IIFE Module Definitions

## Summary
IIFE (Imediately Invoked Function Expression) are a way to encapsulate your code. Often used with a namespace object to maintain reference to the return value of the IIFE. 

## Interesting
- Script tag order matters
- No explicit way to define dependencies
- Naming collision is not as probable because we've encapsulated the code within each module, removing it from the global namespace, but we now have a global object with potentially has the same issues.


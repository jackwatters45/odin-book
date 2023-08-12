# vite-react-ts-linting

## next

- forgot password
  - tests
  - implement
  - move tests to inside file
- alt login methods

- test what error looks like
- look at facebook

- nav

- add user profile page
- add user profile edit page

- dashboard
- post

## want to implement

- useReducer

## eventually

- user can only view login etc but can login as guest
- business accounts
- icon
- figure out better way to share types

## keep eye on

- user birthday (age) make sure good

/MyComponent
MyComponent.js (or .jsx, .tsx)
MyComponent.test.js
index.js
The index.js often re-exports the main component to simplify imports:

// inside index.js
export { default } from './MyComponent';
This allows for cleaner imports:

import MyComponent from './MyComponent';
Instead of:

import MyComponent from './MyComponent/MyComponent';

# vite-react-ts-linting

## next

- forgot password stuff

  - how to prevent people from randomly going to this these pages

  - go through motions -> make pages work

  - make sure link reset works
  - routing wrong rn
  - rename routes + pages

  - tests + check actually works
  - add nav to ones that meed it

  - check todos + readmes backend + frontend

- login page

  - cache userHistory
  - recent logins part
  - alt login methods
  - guest login

- look at facebook (add more shit below)
- nav
  - logged out
  - logged in
    - logo
    - search
    - navigate
    - notifications
    - profile
- user
  - profile
  - settings
- dashboard
- post

  - create
  - edit
  - delete
  - view

- businesses
- notifications
- sidebar
  - left
  - right

## notes

- useQuery error is just a string because i am throwing res.json.message

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

// Include React. You won't be creating any Components here so you don't need to import {Component} seperately.
import React from 'react';

// Import the react dom which we will use to render our React Component into the DOM. Make sure react-dom is npn installed and saved in package.json.
import ReactDOM from 'react-dom';

// Import the App Component.
import App from './src/app.jsx';

// Tell the React virtual DOM (react dom) where to mount the App Component.
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

/* TODO:: Whats the whole point of this site?
 * - focus on major news across select categories in thread like manner?
 * - or hard choose categories and make them each a destination?
 * - 
*/
// TODO:: look for 'whatsitlike.com' or similar domain.
// TODO:: write terms of use, privacy policy, disclaimer, about page
// TODO:: moderate uploads via lib so as to avoid trolling, hate speech etc.
// TODO:: feed upload mvp only allow text, image files like memes.
// TODO:: employ pagination.
// TODO:: employ upload functionality.
// TODO:: filter by date? filter by popularity?
// TODO:: choose 'American-ish' color scheme.
// TODO:: npm install SASS and implement
// TODO:: npm install redux and implement
// TODO:: watch rest of React/GO lesson and implement.
// TODO:: choose appropriate DB - not RethinkDB....

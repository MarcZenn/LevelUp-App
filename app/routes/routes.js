// import React
import React from 'react';

/*
 * React Router sets up Routing for a react application. It lets one mimic url changes for a single page app i.e. - approximately 41% of react projects incorporate react-router. Learn more about react-router here - https://github.com/ReactTraining/react-router/tree/master/docs
*/
import {Router, Route, IndexRoute} from 'react-router';
import App from '../.././src/app.jsx';
import Home from '../.././components/home.jsx';


export default (
  <Router path='/' component={App}>
    <IndexRoute component={Home} />

  </Router>
);

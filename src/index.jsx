import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import UsersScreen from "./Components/UsersScreen";

const routing = (
    <Router>
      <div className = "container">
        <Route exact path="/" component={App} />
        <Route path="/home" component={UsersScreen} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

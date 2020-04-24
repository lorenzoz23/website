import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import WarZone from '../src/components/Warzone';
import { default as CodeProjects } from '../src/components/Code';
import Hobbies from '../src/components/Hobbies';
import Experience from '../src/components/Experience';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/projects" component={CodeProjects} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/yikes" component={WarZone} />
        <Route path="/experience" component={Experience} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

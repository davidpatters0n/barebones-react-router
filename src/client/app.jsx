// @flow
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Index from './index';
import About from './about';
import Repos from './repos';
import Repo from './repo';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo} />
      </Route>
      <Route path="/about" component={About} />
    </Route>
  </Router>
), document.querySelector('.app'));

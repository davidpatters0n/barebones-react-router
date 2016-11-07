
import 'babel-polyfill';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Person from '../shared/person';

const newPerson = new Person('DJ').hello();

const App = props => (
  <div>
    {props.message}
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

ReactDOM.render(<App message={newPerson} />, document.querySelector('.app'));

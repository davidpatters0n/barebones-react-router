import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Person from '../shared/person';

const newPerson = new Person('DJ').hello();

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}

Listing.propTypes = {
  name: React.PropTypes.string.isRequired,
};

ReactDOM.render(<Listing name={newPerson} />, document.querySelector('.app'));

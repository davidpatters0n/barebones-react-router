import 'babel-polyfill';
import React from 'react';
import Home from './home';
import NavLink from './nav-link';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'test' };
  }

  render() {
    return (
      <div>
        <h1>React + React Router</h1>
        <ul role="navigation">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>

        {this.props.children || <Home />}
      </div>
    );
  }
}

Index.propTypes = {
  children: React.PropTypes.element,
};

export default Index;

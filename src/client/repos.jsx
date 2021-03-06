import React, { PropTypes } from 'react';
import NavLink from './nav-link';


export default function Repos(props) {
  return (
    <div>
      <h2>Repos</h2>
      <ul>
        <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
        <li><NavLink to="/repos/facebook/react">React</NavLink></li>
      </ul>

      {props.children}
    </div>
  );
}

Repos.propTypes = {
  children: PropTypes.element,
};

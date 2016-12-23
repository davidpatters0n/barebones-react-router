/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router';

export default function NavLink(props) {
  return <Link {...props} activeClassName="active-link" />;
}

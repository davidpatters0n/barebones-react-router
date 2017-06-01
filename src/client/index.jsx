import 'babel-polyfill';
import React from 'react';
import Home from './home';
import NavLink from './nav-link';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'test' };
  }

  shouldComponentUpdate () {
    return false;
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav" role="navigation">
                <li className="active"><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/repos">Repos</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>

        {this.props.children || <Home />}
      </div>
    );
  }
}

Index.propTypes = {
  children: React.PropTypes.element,
};

export default Index;

/* eslint-disable no-unused-vars */

import React, { PropTypes } from 'react';
import SearchForm from './search-form';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      atms: '',
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(searchTerm) {
    this.props.onSearchUpdate(searchTerm);
  }

  render() {
    return (
      <div className="searchBox">
        <SearchForm onSearchSubmit={this.handleSearchSubmit} />
      </div>
    );
  }
}

SearchContainer.propTypes = {
  onSearchUpdate: PropTypes.func,
};

export default SearchContainer;

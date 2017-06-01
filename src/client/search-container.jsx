// @flow
/* eslint-disable react/sort-comp */
import React from 'react';
import SearchForm from './search-form';

type Props = {
  onSearchUpdate: Function,
}

class SearchContainer extends React.Component<void, Props, any> {
  props: Props;

  constructor(props: Props) {
    super(props);
    const self: Object = this;
    self.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  shouldComponentUpdate () {
    return false;
  }

  handleSearchSubmit(searchTerm: {address: string, lat: number, lng: number}): void {
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
export default SearchContainer;

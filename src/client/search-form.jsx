// @flow
/* eslint-disable no-console, no-debugger, react/sort-comp*/
import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

type Props = {
  onSearchSubmit: Function,
}

type State = {
  address: string,
  searchTerm: string,
}

class SearchForm extends React.Component<void, Props, State> {
  state: State;
  props: Props;

  constructor(props : Props) {
    super(props);

    this.state = {
      address: 'SW17 9JY',
      searchTerm: '',
    };

    const self: Object = this;
    self.handleSelect = this.handleSelect.bind(this);
    self.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  componentWillMount() {
    console.log('test.....');
  }

  handleSearchTermChange(address : string) {
    this.setState({ address });
  }

  handleSelect() {
    const { address } = this.state;

    geocodeByAddress(address, (err, { lat, lng }) => {
      if (err) { console.log('Oh no!', err); }
      this.setState({ searchTerm: '' });
      console.log(`Yay! got latitude and longitude for ${address}`, { lat, lng });
      this.props.onSearchSubmit({ address, lat, lng });
    });
  }

  render() {
    const cssClasses = {
      root: 'form-group',
      input: 'form-control',
    };

    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleSearchTermChange}
        onSelect={this.handleSelect}
        classNames={cssClasses}
      />
    );
  }
}
export default SearchForm;

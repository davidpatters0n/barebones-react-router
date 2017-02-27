import React, { PropTypes } from 'react';

class SearchForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const searchTerm = this.state.searchTerm.trim();

    if (!searchTerm) {
      return;
    }

    this.setState({ searchTerm: '' });
    this.props.onSearchSubmit({ searchTerm });
  }

  render() {
    return (
      <form className="searchForm" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="search-term">Search</label>
          <input type="text" placeholder="Search ATM" className="form-control" value={this.state.searchTerm} onChange={this.handleSearchTermChange} />
        </div>

        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearchSubmit: PropTypes.func,
};

export default SearchForm;

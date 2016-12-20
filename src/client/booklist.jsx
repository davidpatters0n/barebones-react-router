/* eslint-disable class-methods-use-this, no-debugger */
import 'babel-polyfill';
import React, { PropTypes } from 'react';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { name: 'Zero to One', author: 'Peter Thiel' },
        { name: 'Monk who sold his Ferrari', author: 'Robin Sharma' },
        { name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' },
      ],
      selectedBooks: [],
      error: false,
    };

    // Bind all defined methods here vvvvv
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectedBooks = this.handleSelectedBooks.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.selectedBooks.length === 0) {
      this.setState({ error: 'Please choose at lease one book to continue' });
    } else {
      this.setState({ error: false });
      this.props.updateFormData({ selectedBooks: this.state.selectedBooks });
    }
  }

  handleSelectedBooks(event) {
    const selectedBooks = this.state.selectedBooks;
    const index = selectedBooks.indexOf(event.target.value);

    if (event.target.checked) {
      if (index === -1) {
        selectedBooks.push(event.target.value);
      }
    } else {
      selectedBooks.splice(index, 1);
    }
    this.setState({ selectedBooks });
  }

  renderError() {
    if (this.state.error) {
      return (
        <div className="alert alert-danger">
          {this.state.error}
        </div>
      );
    }
    return null;
  }

  renderBook(book, key) {
    return (
      <div className="checkbox" key={key}>
        <label htmlFor="bookInfo">
          <input type="checkbox" value={book.name} onChange={this.handleSelectedBooks} />
          {book.name} -- {book.author}
        </label>
      </div>
    );
  }

  render() {
    const errorMessage = this.renderError();
    return (
      <div>
        <h3> Choose from wide variety of books avialable in the store</h3>
        {errorMessage}
        <form onSubmit={this.handleSubmit}>
          {
            this.state.books.map((book, key) =>
              this.renderBook(book, key)
            )
          }
          <input type="submit" className="btn btn-success" />
        </form>
      </div>
    );
  }
}

BookList.propTypes = {
  updateFormData: PropTypes.func,
};

export default BookList;

/* eslint-disable class-methods-use-this */
import 'babel-polyfill';
import React from 'react';

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
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    console.log('Form submitted');
  }

  renderBook(book, key) {
    return (
      <div className="checkbox" key={key}>
        <label htmlFor="bookInfo">
          <input type="checkbox" /> {book.name} -- {book.author}
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3> Choose from wide variety of books avialable in the store</h3>

        <form onSubmit={this.handleSubmit}>
          {
            this.state.books.map(book =>
              this.renderBook(book)
            )
          }
          <input type="submit" className="btn btn-success" />
        </form>
      </div>
    );
  }
}

export default BookList;

import 'babel-polyfill';
import React, { PropTypes } from 'react';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    event.preventDefault();
    this.props.updateFormData(this.props.data);
  }

  render() {
    return (
      <div>
        <h1> Are you sure you want to submit the data?</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <strong>Full Name</strong>: {this.props.data.fullName};
          </div>

          <div>
            <strong>Contact Number</strong>: {this.props.data.contactNumber};
          </div>

          <div>
            <strong>Shipping Address</strong>: {this.props.data.shippingAddress};
          </div>

          <div>
            <strong>Selected Books</strong>: {this.props.data.selectedBooks.join(', ')};
          </div>
          <br />
          <button className="btn btn-success">Place Order</button>
        </form>

      </div>
    );
  }
}

Confirmation.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string,
    contactNumber: PropTypes.string,
    shippingAddress: PropTypes.string,
    selectedBooks: PropTypes.arrayOf(PropTypes.string),
  }),

  updateFormData: PropTypes.func,
};

export default Confirmation;

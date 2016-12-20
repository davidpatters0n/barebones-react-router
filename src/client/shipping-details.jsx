import 'babel-polyfill';
import React, { PropTypes } from 'react';

class ShippingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      contactNumber: '',
      shippingAddress: '',
      error: false,
    };

    this.renderError = this.renderError.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  validateInput() {
    if (this.state.fullName === '') {
      this.setState({ error: 'Please enter full name' });
    } else if (this.state.contactNumber === '') {
      this.setState({ error: 'Please enter a contact number' });
    } else if (this.state.shippingAddress === '') {
      this.setState({ error: 'Please enter your shipping address' });
    } else {
      this.setState({ error: false });
    }
    return false;
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = {
      fullName: this.state.fullName,
      contactNumber: this.state.contactNumber,
      shippingAddress: this.state.shippingAddress,
    };

    if (this.validateInput()) {
      this.props.updateFormData(formData);
    }
  }

  handleChange(event, attribute) {
    const newState = this.state;
    newState[attribute] = event.target.value;
    this.setState(newState);
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

  render() {
    const errorMessage = this.renderError();

    return (
      <div>
        <h1>Enter your shipping information</h1>
        {errorMessage}

        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full Name"
                value={this.state.fullName}
                onChange={event => this.handleChange(event, 'fullName')}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Telephone Number"
                value={this.state.contactNumber}
                onChange={event => this.handleChange(event, 'contactNumber')}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Shipping Address"
                value={this.state.shippingAddress}
                onChange={event => this.handleChange(event, 'shippingAddress')}
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

ShippingDetails.propTypes = {
  updateFormData: PropTypes.func,
};

export default ShippingDetails;

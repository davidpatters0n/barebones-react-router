import 'babel-polyfill';
import React, { PropTypes } from 'react';

class DeliveryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveryOption: 'Primary',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ deliveryOption: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateFormData(this.state);
    this.props.updateStep(4);
  }

  render() {
    return (
      <div>
        <h1>Choose your delivery options here.</h1>
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <div className="radio">
              <label htmlFor="primaryOption">
                <input
                  type="radio"
                  checked={this.state.deliveryOption === 'Primary'}
                  value="Primary"
                  onChange={this.handleChange}
                />
                Primary -- Next day delivery
              </label>
            </div>

            <div className="radio">
              <label htmlFor="normalOption">
                <input
                  type="radio"
                  checked={this.state.deliveryOption === 'Normal'}
                  value="Normal"
                  onChange={this.handleChange}
                />
                Normal -- 3-5 Business Days
              </label>
            </div>

            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

DeliveryDetails.propTypes = {
  updateFormData: PropTypes.func,
  updateStep: PropTypes.func,
};

export default DeliveryDetails;

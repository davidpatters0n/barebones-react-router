import 'babel-polyfill';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import BookList from './booklist';
import ShippingDetails from './shipping-details';
import DeliveryDetails from './delivery-details';
import Confirmation from './confirmation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentStep: 1, formValues: {} };
    this.updateFormData = this.updateFormData.bind(this);
    this.updateStep = this.updateStep.bind(this);
  }

  updateFormData(formData) {
    const formValues = Object.assign({}, this.state.formValues, formData);
    this.setState({ formValues });
  }

  updateStep(step) {
    this.setState({ currentStep: step });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateFormData({ selectedBooks: this.state.selectedBooks });
  }

  render() {
    let component = null;
    const currentStep = this.state.currentStep;
    switch (currentStep) {
      case 1: {
        component = (<BookList
          updateFormData={this.updateFormData}
          updateStep={this.updateStep}
        />);
        break;
      }
      case 2: {
        component = (<ShippingDetails
          updateFormData={this.updateFormData}
          updateStep={this.updateStep}
        />);
        break;
      }
      case 3: {
        component = (<DeliveryDetails
          updateFormData={this.updateFormData}
          updateStep={this.updateStep}
        />);
        break;
      }
      case 4: {
        component = (<Confirmation
          data={this.state.formValues}
          updateFormData={this.updateFormData}
        />);
        break;
      }
      default: {
        component = (<BookList
          updateFormData={this.updateFormData}
          updateStep={this.updateStep}
        />);
      }
    }
    return (
      <div>
        { component }
      </div>
    );
  }
}

App.propTypes = {
  updateFormData: PropTypes.func,
};

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);

/* eslint-disable react/prefer-stateless-function, class-methods-use-this, no-debugger*/
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './booklist';
import ShippingDetails from './shipping-details';
import DeliveryDetails from './delivery-details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 1 };
  }

  render() {
    let component = null;
    const step = this.state.step;
    switch (step) {
      case 1: {
        component = <BookList />;
        break;
      }
      case 2: {
        component = <ShippingDetails />;
        break;
      }
      case 3: {
        component = <DeliveryDetails />;
        break;
      }
      default: {
        component = <BookList />;
      }
    }
    return (
      <div>
        { component }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);

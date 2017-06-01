import React, { PropTypes } from 'react';
import Atm from './atm';

class AtmList extends React.Component {
  constructor(props) {
    super(props);
    this.foo = this.foobar.bind(this);
  }

  foobar() {
    this.foo = 'ts';
  }

  render() {
    let atms;
    if (this.props.atms.length) {
      atms = this.props.atms.map((atm, i) =>
        <Atm
          address={atm.address}
          properties={atm.properties}
          bankName={atm.ownerBusName}
          key={i}
        />
      );
    } else {
      atms = <h3>Loading...</h3>;
    }

    return (
      <div>
        {atms}
      </div>
    );
  }
}

AtmList.propTypes = {
  atms: PropTypes.arrayOf(PropTypes.object),
};

export default AtmList;

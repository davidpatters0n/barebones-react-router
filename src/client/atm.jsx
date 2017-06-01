// @flow
import React from 'react';

type Props = {
  address: {
    city: string,
    country: string,
    postalCode: string,
    state: string,
    street: string,
    street2: string,
    formattedAddress: string,
  };
  bankName: string;
  properties: {
    name: string,
    value: string
  };
}

function Atm(props : Props) {
  const { address, bankName, properties } = props;
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{bankName}</h3>
      </div>
      <ul className="list-group">
        <div className="atm-details">
          <p>{address.formattedAddress}</p>
        </div>
      </ul>
    </div>
  );
}

export default Atm;

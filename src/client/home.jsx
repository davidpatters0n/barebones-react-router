/* eslint-disable no-unused-vars */
import React from 'react';
import Helmet from 'react-helmet';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 51.418981, lng: -0.166303 }}
  />
));

export default function Home() {
  return (
    <div className="row">
      <div className="col-md-6" style={{ height: '500px' }}>
        <Helmet title="Google Map Example" />
        <div style={{ height: '100%' }}>
          <SimpleMapExampleGoogleMap
            containerElement={
              <div style={{ height: '100%' }} />
            }
            mapElement={
              <div style={{ height: '100%' }} />
            }
          />
        </div>
      </div>
      <div className="col-md-6"><h1>TEST</h1></div>
    </div>
  );
}

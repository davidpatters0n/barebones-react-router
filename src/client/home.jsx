/* eslint-disable no-unused-vars, no-debugger, no-console, no-undef */
import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/addons/MarkerClusterer';
import SearchContainer from './search-container';

const MarkerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 51.418981, lng: -0.166303 }}
  >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map((marker, i) => (
        <Marker
          position={{ lat: marker.coordinates.latitude, lng: marker.coordinates.longitude }}
          key={i}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
));


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      atms: '',
    };

    this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  fetch(searchTerm = null) {
    axios.get('http://localhost:4567', {
      params: searchTerm,
    })
    .then((res) => {
      const markers = res.data.responseData[0].foundATMLocations.map(elem =>
        elem.location,
      );
      this.setState({ markers });
    });
  }

  handleSearchUpdate(term) {
    this.fetch(term);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6" style={{ height: '550px' }}>
          <Helmet title="Google Map Example" />
          <div style={{ height: '100%' }}>
            <MarkerMap
              containerElement={
                <div style={{ height: '550px' }} />
              }
              mapElement={
                <div style={{ height: '550px' }} />
              }
              markers={this.state.markers}
            />
          </div>
        </div>
        <div className="col-md-6">
          <SearchContainer onSearchUpdate={this.handleSearchUpdate} atms={this.state.atms} />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  onSearchUpdate: PropTypes.func,
};

export default Home;

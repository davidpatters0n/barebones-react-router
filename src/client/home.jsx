/* eslint-disable no-unused-vars, no-debugger, no-console, no-undef */
import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/addons/MarkerClusterer';
import SearchContainer from './search-container';
import AtmList from './atm-list';

const MarkerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={13}
    center={{ lat: props.lat, lng: props.lng }}
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

  constructor(props ) {
    super(props);
    this.state = {
      atms: [],
    };

    this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
  }

  componentDidMount() {
    this.setLatLng();
    this.fetch();
  }

  fetch(searchTerm = null) {
    axios.get('http://localhost:4567', {
      params: { address: searchTerm },
    })
    .then((res) => {
      const atms = _.uniq(res.data.responseData[0].foundATMLocations.map(elem =>
        elem.location,
      ), 'ownerBusId');
      this.setState({ atms });
    });
  }

  setLatLng() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({lat: position.coords.latitude, lng: position.coords.longitude, displayMap: true});
    });
  }

  handleSearchUpdate(term) {
    this.setState({ lat: term.lat, lng: term.lng });
    this.fetch(term.address);
  }

  render() {
    let map;
    if (this.state.displayMap) {
      map = (
        <div style={{ height: '100%' }}>
          <MarkerMap
            containerElement={
              <div style={{ height: '550px' }} />
            }
            mapElement={
              <div style={{ height: '550px' }} />
            }
            markers={this.state.atms}
            lat={this.state.lat}
            lng={this.state.lng}
          />
        </div>
      );
    } else {
      map = <div>Loading....</div>;
    }


    return (
      <div className="row" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
        <div className="col-md-6" style={{ height: '550px' }}>
          <Helmet title="Google Map Example" />
          {map}
        </div>
        <div className="col-md-6">
          <SearchContainer onSearchUpdate={this.handleSearchUpdate} atms={this.state.atms} />
          <AtmList atms={this.state.atms} />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  onSearchUpdate: PropTypes.func,
};

export default Home;

/* eslint-disable no-unused-vars, no-debugger, no-console, no-undef */
import React from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/addons/MarkerClusterer';

// const SimpleMapExampleGoogleMap = withGoogleMap(props => (
//   <GoogleMap
//     defaultZoom={15}
//     defaultCenter={{ lat: 51.418981, lng: -0.166303 }}
//   />
// ));

const MarkerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 51.5074, lng: 0.1278 }}
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


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    };
    // this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:4567')
      .then((res) => {
        const markers = res.data.responseData[0].foundATMLocations.map(elem =>
          elem.location,
        );
        this.setState({ markers });
      });
  }

  render() {
    return (
      <MarkerMap
        containerElement={
          <div style={{ height: '550px' }} />
        }
        mapElement={
          <div style={{ height: '550px' }} />
        }
        markers={this.state.markers}
      />
    );
  }
}

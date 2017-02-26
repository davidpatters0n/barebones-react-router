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
    defaultZoom={15}
    defaultCenter={{ lat: 51.418981, lng: -0.166303 }}
  >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          position={{ lat: marker.latitude, lng: marker.longitude }}
          key={marker.photo_id}
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
    // axios.get('http://localhost:4567')
    //   .then((res) => {
    //     this.setState({ markers: res.data.responseData[0].foundATMLocations });
    //   });
    axios.get('https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json')
      .then((res) => {
        this.setState({ markers: res.photos });
        // this.setState({ markers: res.data.responseData[0].foundATMLocations });
      });
  }

  render() {
    return (
      <MarkerMap
        containerElement={
          <div style={{ height: '100%' }} />
        }
        mapElement={
          <div style={{ height: '100%' }} />
        }
        markers={this.state.markers}
      />
    );
  }
}

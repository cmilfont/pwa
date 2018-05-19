import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import L from 'leaflet';
import { Map, ZoomControl } from 'react-leaflet';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { GoogleMutant, GoogleApiLoader } from 'react-leaflet-googlemutant';

import SearchToolbar from '../search-toolbar';

const styles = () => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
});

class MapBeerswarm extends React.PureComponent {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const { classes } = this.props;
    const options = {
      maxZoom: 18,
      minZoom: 0,
      zoom: 10,
      zoomControl: false,
      doubleClickZoom: true,
      keyboard: false,
      // bounds: [L.latLng(-15), L.latLng(-56)]
    };

    return (
      <div className={classes.root}>
        <GoogleApiLoader apiKey="AIzaSyBOFWxLBbQtSKwhKjdgLQFTfYgEMJk7ACY">
          <Map center={position} zoom={this.state.zoom}>
            <GoogleMutant type="roadmap" />
          </Map>
        </GoogleApiLoader>
      </div>
    );
  }
}

export default withStyles(styles)(MapBeerswarm);

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

  render() {
    
    const { classes, myPosition: { latitude, longitude } } = this.props;
    const position = [latitude, longitude];
    const options = {
      maxZoom: 18,
      minZoom: 0,
      zoom: 10,
      zoomControl: false,
      doubleClickZoom: true,
      keyboard: false,
    };

    return (
      <div className={classes.root}>
        <GoogleApiLoader apiKey="AIzaSyBOFWxLBbQtSKwhKjdgLQFTfYgEMJk7ACY">
          <Map center={position} {...options}>
            <SearchToolbar />
            <GoogleMutant type="roadmap" />
          </Map>
        </GoogleApiLoader>
      </div>
    );
  }
}

export default withStyles(styles)(MapBeerswarm);

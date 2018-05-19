import { connect } from 'react-redux';
import Map from './map.js';

const mapStateToProps = (state) => {
  return {
    myPosition: state.myPosition,
  }
}

export default connect(mapStateToProps)(Map);
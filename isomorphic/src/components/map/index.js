import { connect } from 'react-redux';
import Map from './map.js';

const mapStateToProps = (state) => {
  return {
    myPosition: state.get('myPosition').toJS(),
  }
}

export default connect(mapStateToProps)(Map);
import { connect } from 'react-redux';
import Gps from './geolocation';
import { locateMe } from '../../api/actions';

const mapDispatchToProps = dispatch => ({
    locate: () => {
        dispatch(locateMe())
    },
});

export default connect(null, mapDispatchToProps)(Gps);
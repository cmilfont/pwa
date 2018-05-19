import { connect } from 'react-redux';
import Offline from './offline';
import { locateMe } from '../../api/actions';

const mapDispatchToProps = dispatch => ({
    offlinePin: () => {
        // dispatch(offlinePin())
    },
});


export default connect(null, mapDispatchToProps)(Offline);
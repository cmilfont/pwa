import { connect } from 'react-redux';
import Offline from './offline';
import { offlinePin } from '../../api/actions';

const mapDispatchToProps = dispatch => ({
    offlinePin: () => dispatch(offlinePin()),
});

const mapStateToProps = state => ({
    offline: state.get('offline', false),
})

export default connect(mapStateToProps, mapDispatchToProps)(Offline);
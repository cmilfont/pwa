import { connect } from 'react-redux';
import Place from './place';
import { loadPlace } from '../../api/actions';

const mapStateToProps = (state) => ({
    place: state.get('place', {}),
});

const mapDispatchToProps = dispatch => ({
    loadPlace: (payload) => dispatch(loadPlace(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Place);
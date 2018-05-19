import { connect } from 'react-redux';
import Menu from './menu';
import { loginUser, logoutUser } from '../../../../api/actions';

const mapStateToProps = state => ({
        user: state.user
});

const mapDispatchToProps = dispatch => ({
    loginUser: () => dispatch(loginUser()),
    logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
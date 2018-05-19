import { connect } from 'react-redux';

import { loginUser, logoutUser } from '../../api/actions';
import { getUserData } from '../../api/reducers';
import Menu from './menu';

const mapStateToProps = state => ({ user: getUserData(state) });

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(loginUser()),
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
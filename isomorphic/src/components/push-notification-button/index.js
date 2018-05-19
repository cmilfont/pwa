import { connect } from 'react-redux';

import {
  subscribePushNotification,
  unsubscribePushNotification,
} from '../../api/actions';
import { getPushNotificationSubscriptionStatus } from '../../api/reducers';
import PushNotificationButton from './button';

const mapStateToProps = state => ({
  pushNotificationSubscriptionStatus: getPushNotificationSubscriptionStatus(state),
});

const mapDispatchToProps = dispatch => ({
  subscribePushNotification: () => dispatch(subscribePushNotification()),
  unsubscribePushNotification: () => dispatch(unsubscribePushNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PushNotificationButton);
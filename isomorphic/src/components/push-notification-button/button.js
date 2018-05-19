import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import NotificationsOff from '@material-ui/icons/NotificationsOff';
import NotificationsActive from '@material-ui/icons/NotificationsActive';

class NotificationButton extends React.PureComponent {
  componentDidMount() {
    this.props.subscribePushNotification();
  }

  render() {
    const {
      pushNotificationSubscriptionStatus,
      subscribePushNotification,
      unsubscribePushNotification,
    } = this.props;

    const blockedPushNotification = Notification.permission === 'denied';

    const notificationButton = pushNotificationSubscriptionStatus
      ? (
        <IconButton disabled={blockedPushNotification} onClick={unsubscribePushNotification}>
          <NotificationsActive />
        </IconButton>
        )
      : (
        <IconButton disabled={blockedPushNotification} onClick={subscribePushNotification}>
          <NotificationsOff />
        </IconButton>
      )
    return notificationButton;
  }
}

export default NotificationButton;

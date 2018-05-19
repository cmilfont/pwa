import { takeLatest, put, all } from 'redux-saga/effects';
import { setPushNotificationSubscriptionStatus } from '../actions';
import {
  SUBSCRIBE_PUSH_NOTIFICATION,
  UNSUBSCRIBE_PUSH_NOTIFICATION,
} from '../constants';
import pushManager from '../utils/service-worker-push-manager';

function* subscribePushNotification() {
  try {
    const pushNotificationServer = process.env.REACT_APP_PUSH_NOTIFICATION_SERVER;
    const subscription = yield pushManager.subscribe();

    fetch(`${pushNotificationServer}/register`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(subscription),
    });

    yield put(setPushNotificationSubscriptionStatus(true));
  } catch (err) {
    console.log(err);
  }
}

function* unsubscribePushNotification() {
  try {
    yield put(setPushNotificationSubscriptionStatus(false));
  } catch (err) {
    console.log(err);
  }
}

export default function* watch() {
  yield all([
    takeLatest(SUBSCRIBE_PUSH_NOTIFICATION, subscribePushNotification),
    takeLatest(UNSUBSCRIBE_PUSH_NOTIFICATION, unsubscribePushNotification),
  ]);
}

import { all, fork } from 'redux-saga/effects';

import watchAuthStateChanged from './auth-state-changed';
import watchLoginAnonymous from './login-anonymous';
import watchLoginUser from './login-user';
import watchLogoutUser from './logout-user';
import watchPushNotification from './push-notification';

import watchMyPosition from './position';

export default function* rootSaga(firebase) {
  yield all([
    fork(watchAuthStateChanged, firebase),
    fork(watchLoginAnonymous, firebase),
    fork(watchLoginUser, firebase),
    fork(watchLogoutUser, firebase),
    fork(watchMyPosition),
    //fork(watchPushNotification),
  ]);
};

import { all, fork } from 'redux-saga/effects';

import watchAuthStateChanged from './auth-state-changed';
import watchLoginAnonymous from './login-anonymous';

export default function* rootSaga(firebase) {
    yield all([
        fork(watchAuthStateChanged, firebase), 
        fork(watchLoginAnonymous, firebase),
        // fork(watchLoginUser, firebase),
        // fork(WatchLogoutUser, firebase),
    ])
}
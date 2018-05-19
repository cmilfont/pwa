import { take, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { loginAnonymous, saveUserData } from '../actions';

function createSocketChannel(firebase) {
    return eventChannel(emit => {
        return firebase.auth().onAuthStateChanged(user => {
            emit(user || {});
        });
    });
}

export default function* watch(firebase) {
    const socketChannel = yield call(createSocketChannel, firebase);
    while(true) {
        const payload = yield take(socketChannel);
        if (payload.email) {
            yield put(saveUserData(payload));
        } else {
            yield put(loginAnonymous);
        }
    }
};
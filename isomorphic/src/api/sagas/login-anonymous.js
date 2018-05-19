import { takeLatest } from 'redux-saga/effects';
import { LOGIN_ANONYMOUS } from '../constants';

function* anonymousLogin(firebase) {
  try {
    yield firebase.auth().signInAnonymously();
  } catch (err) {
    console.log(err);
  }
}

export default function* watch(firebase) {
  yield takeLatest(LOGIN_ANONYMOUS, anonymousLogin, firebase);
}
import { takeLatest, put } from 'redux-saga/effects';
import { LOGOUT_USER } from '../constants';
import { clearUserData } from '../actions';

function* prepareLogout(firebase) {
  try {
    yield firebase.auth().signOut();
    yield put(clearUserData());
  } catch (err) {
    console.log(err);
  }
}

export default function* watch(firebase) {
  yield takeLatest(LOGOUT_USER, prepareLogout, firebase);
}
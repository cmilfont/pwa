import firebase from 'firebase';
import { put, takeLatest } from 'redux-saga/effects';
import { saveUserData } from '../actions';
import { LOGIN_USER } from '../constants';

function* userLogin(firebaseApp) {
  try {
    const authProvider = new firebase.auth.GoogleAuthProvider();
    authProvider.addScope('profile');
    authProvider.addScope('email');
    authProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    const { user: payload } = yield firebaseApp.auth().signInWithPopup(authProvider);
    const { displayName, photoURL, email, uid } = payload;
    const ref = yield firebaseApp.database().ref(`/users/${uid}`);
    yield ref.update({ displayName, photoURL, email });

    yield put(saveUserData(payload));
  } catch (err) {
    console.log(err);
    yield put(saveUserData(err));
  }
}

export default function* watch(firebaseApp) {
  yield takeLatest(LOGIN_USER, userLogin, firebaseApp);
}
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOCATE_ME } from '../constants';
import { myPosition } from '../actions';

const fetchCoords = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => { 
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            })
    });
}

function* locate() {
    try {
        const payload = yield call(fetchCoords);
        yield put(myPosition(payload));
    } catch (e) {
        console.log('SAGA LOCATE', e);
    }
}

export default function* watch() {
    yield takeLatest(LOCATE_ME, locate);
  }
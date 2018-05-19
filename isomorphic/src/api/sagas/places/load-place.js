import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_PLACE } from '../../constants';
import { loadedPlace } from '../../actions';

const fetchPlace = (payload) => {
    return new Promise((resolve, reject) => {
        console.log(payload);
       resolve({
           name: 'Cervejaria 5 Elementos',
           description: 'Cervejaria 5 Elementos',
           coords: {
               latitude: '-3.7796394',
               longitude: '-38.4884157'
           }
       })
    });
}

function* load(action) {
    try {
        const payload = yield call(fetchPlace, action.payload);
        yield put(loadedPlace(payload));
    } catch (e) {
        console.log('SAGA LOCATE', e);
    }
}

export default function* watch() {
    yield takeLatest(LOAD_PLACE, load);
  }
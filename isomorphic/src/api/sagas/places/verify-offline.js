import { call, put, takeLatest, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import localforage from 'localforage';
import { offlineVerified } from '../../actions';

const store = localforage.createInstance({
    name: 'beerswarm',
});

const retorno = (id) => {
    return store.getItem(id);
}

function* verify(action){
    try {
        const id = action.payload.pathname;
        const payload = yield call(retorno, id);
        yield put(offlineVerified(!!payload));
    } catch (e) {
        console.error(e);
    }
}

export default function* watch() {
    yield takeLatest(LOCATION_CHANGE, verify);
}
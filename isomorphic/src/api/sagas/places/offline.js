import { call, put, takeLatest, select } from 'redux-saga/effects';
import { OFFLINE_PIN } from '../../constants';
import { offlinePinSuccess } from '../../actions';
import localforage from 'localforage';

const store = localforage.createInstance({
    name: 'beerswarm',
});

const save = (key, place) => {
    return store.setItem(key, place).then(function () {
        return store.getItem(key);
    })
}

function* pin() {
    try {
        const state = yield select();
        const routerState = state.getIn(['router', 'locationBeforeTransitions']);
        const id = routerState.pathname;
        const place = state.get('place');
        const payload = yield call(save, id, place);
        yield put(offlinePinSuccess(payload));
    } catch (e) {
        console.log('SAGA LOCATE', e);
    }
}

export default function* watch() {
    yield takeLatest(OFFLINE_PIN, pin);
  }
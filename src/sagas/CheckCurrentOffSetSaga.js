import {takeEvery, put, select} from 'redux-saga/effects';
const border = 1;

function * workerCheck() {
    let y = yield select(state => state.y);
    let currentOffSetMin = yield select(state => state.currentOffSetMin);
    let currentOffSetMax = yield select(state => state.currentOffSetMax);
    let limit = (yield select(state => state.rows)) - 1;

    if (y - border === currentOffSetMin && y - border !== 0) {
        yield put({type: "CHANGE_CURENT_OFF_SET_UP"})
    }
    if (y + border === currentOffSetMax && currentOffSetMax < limit) {
        yield put({type: "CHANGE_CURENT_OFF_SET_DOWN"})
    }
}

export function * watchCheckCurrentOffSet() {
    yield takeEvery('ON_CHECK_CURRENT_OFF_SET', workerCheck)
}

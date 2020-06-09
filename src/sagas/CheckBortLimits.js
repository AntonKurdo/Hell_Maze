import {takeEvery, put, select} from 'redux-saga/effects';
const FIRST_X_POSITION = 0;
const LAST_X_POSITION = 19;

function * workerCheck({payload: direction}) {

    let x = yield select(state => state.x);
    let y = yield select(state => state.y);

    if (x === FIRST_X_POSITION && direction === "LEFT") {

        let next = yield select(state => state.matrix[y][LAST_X_POSITION]);
        if (next === 'empty') {
            yield put({type: "CATCH_BORT_LIMIT_LEFT"})
        }
        if (next === 'certificate') {
            yield put({type: "CATCH_BORT_LIMIT_LEFT"})
            yield put({type: "CATCH_CERTIFICATE"})
        }
        if (next === 'skill') {
            yield put({type: "CATCH_BORT_LIMIT_LEFT"})
            yield put({type: "CATCH_SKILL"})
        }

    }
    if (x === LAST_X_POSITION && direction === 'RIGHT') {
        let next = yield select(state => state.matrix[y][FIRST_X_POSITION]);
        if (next === 'empty') {
            yield put({type: "CATCH_BORT_LIMIT_RIGHT"})
        }
        if (next === 'certificate') {
            yield put({type: "CATCH_BORT_LIMIT_RIGHT"})
            yield put({type: "CATCH_CERTIFICATE"})
        }
        if (next === 'skill') {
            yield put({type: "CATCH_BORT_LIMIT_RIGHT"})
            yield put({type: "CATCH_SKILL"})
        }

    }
}

export function * watchBortsLimits() {
    yield takeEvery('ON_CHECK_BORTS_LIMITS', workerCheck)
}

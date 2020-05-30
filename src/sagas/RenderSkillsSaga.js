import {takeEvery, put, select} from 'redux-saga/effects';


function* workerRenderSkills() {
    let matrix = yield select(state => state.matrix);
    let catched_certificates = yield select(state => state.catched_certificates);
    let rows = yield select(state => state.rows);
    let cols = yield select(state => state.cols);

    if (catched_certificates === 8) {      
        for (let i = 1; i <= 3; i++) {
            let row = Math.round(Math.random() * (rows - 1));
            let col = Math.round(Math.random() * (cols - 1));
            matrix[row][col] = 'skill';
        }
        yield put({type: "SET_MATRIX", payload: matrix});
    }

}

export function* watchRenderSkills() {
    yield takeEvery('CATCH_CERTIFICATE', workerRenderSkills)
}
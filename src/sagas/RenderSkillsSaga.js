import {takeEvery, put, select} from 'redux-saga/effects';
const startFlagNumber = 0;
const endFlagNumber = 3;
function * workerRenderSkills() {
    let matrix = yield select(state => state.matrix);
    let catched_certificates = yield select(state => state.catched_certificates);
    let rows = yield select(state => state.rows);
    let cols = yield select(state => state.cols);
    let allCertificates = yield select(state => state.certificates);
    if (catched_certificates === allCertificates) {
        let generated = startFlagNumber;
        console.log(generated)
        while (generated < endFlagNumber) {
            let row = Math.round(Math.random() * (rows - 1));
            let col = Math.round(Math.random() * (cols - 1));
            let item = yield select(state => state.matrix[row][col]);
            if (item === 'empty') {
                matrix[row][col] = 'skill'
                generated += 1;
            }
        }
        yield put({type: "SET_MATRIX", payload: matrix});
    }
}

export function * watchRenderSkills() {
    yield takeEvery('CATCH_CERTIFICATE', workerRenderSkills)
}
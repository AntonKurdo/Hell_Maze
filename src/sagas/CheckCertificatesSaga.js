
import { takeEvery, put, select }  from 'redux-saga/effects';


function* workerCheck({payload: direction}) { 
    let x = yield select(state => state.x);
    let y = yield select(state => state.y);
    let next;

  
    if(direction === 'UP') {
        next = yield select(state => state.matrix[y-1][x]);
    }
    if(direction === 'DOWN') {
        next = yield select(state => state.matrix[y+1][x]);
    }
    if(direction === 'LEFT') {
        next = yield select(state => state.matrix[y][x-1]);
    }
    if(direction === 'RIGHT') {
        next = yield select(state => state.matrix[y][x+1]);
    }

    if(next === 'certificate') {
     yield put({type: "CATCH_CERTIFICATE"})
    }
 
   
}

export function* watchCheckCertificates() {
    yield takeEvery('ON_CHECK_CERTIFICATES', workerCheck)
}

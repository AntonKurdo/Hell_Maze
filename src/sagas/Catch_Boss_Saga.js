import {takeEvery, put, select} from 'redux-saga/effects';


function* workerCatchBoss({payload: direction}) {
    
    let x = yield select(state => state.x);
    let y = yield select(state => state.y);
    let limit = yield select(state => state.rows);
    let next;
    
  
    if (y > 0) {
        if (direction === 'UP') {              
            next = yield select(state => state.matrix[y - 1][x]);         
        }
    }
    if (y < limit - 1) {
        if (direction === 'DOWN') {           
            next = yield select(state => state.matrix[y + 1][x]);
        }
    }
    if (direction === 'LEFT') {        
        next = yield select(state => state.matrix[y][x - 1]);
    }
    if (direction === 'RIGHT') {      
        next = yield select(state => state.matrix[y][x + 1]);
    }
    if (next === 'boss') {   
        yield put({type: "BOSS_CATCHED"})
    }

}

export function* watchCatchBoss() {
    yield takeEvery('BOSS_CATCHING', workerCatchBoss)
}
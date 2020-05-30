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

      
    if(next !== 'wall' && direction === 'UP') {
        yield put({type: "ON_UP", payload: {x: x, y: y}})
    }   
    if(next !== 'wall' && direction === 'DOWN') {
        yield put({type: "ON_DOWN", payload: {x: x, y: y}})
    }   
    if(next !== 'wall' && direction === 'LEFT') {
        yield put({type: "ON_LEFT", payload: {x: x, y: y}})
    }   
    if(next !== 'wall' && direction === 'RIGHT') {
        yield put({type: "ON_RIGHT", payload: {x: x, y: y}})
    }   
   
}

export function* watchCheckWall() {
    yield takeEvery('ON_CHECK_WALLS', workerCheck)
}




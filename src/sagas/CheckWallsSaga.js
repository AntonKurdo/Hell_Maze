import {takeEvery, put, select} from 'redux-saga/effects';
const FIRST_X_POSITION = 0;
const LAST_X_POSITION = 19;
function * workerCheck({payload: direction}) {
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

    if (y > 0) {
        if (next !== 'wall' && next !== 'boss_wall' && direction === 'UP') {
            yield put({
                type: "ON_UP",
                payload: {
                    x: x,
                    y: y
                }
            });
            yield put({type: 'ON_CHECK_CURRENT_OFF_SET', payload: 'UP'})
        }
    }
    if (y < limit - 1) {
        if (next !== 'wall' && next !== 'boss_wall' && direction === 'DOWN') {
            yield put({
                type: "ON_DOWN",
                payload: {
                    x: x,
                    y: y
                }
            });
            yield put({type: 'ON_CHECK_CURRENT_OFF_SET', payload: 'DOWN'});
        }
    }
    if (next !== 'wall' && next !== 'boss_wall' && direction === 'LEFT') {
        if(x === FIRST_X_POSITION) {
            yield put({type: 'ON_CHECK_BORTS_LIMITS', payload: 'LEFT'})
        } else {
        yield put({
            type: "ON_LEFT",
            payload: {
                x: x,
                y: y
            }
        });
    }
    }
    if (next !== 'wall' && next !== 'boss_wall' && direction === 'RIGHT') {
        if(x === LAST_X_POSITION) {
            yield put({type: 'ON_CHECK_BORTS_LIMITS', payload: 'RIGHT'})
        } else {
        yield put({
            type: "ON_RIGHT",
            payload: {
                x: x,
                y: y
            }
        });
    }
    }
}

export function * watchCheckWall() {
    yield takeEvery('ON_CHECK_WALLS', workerCheck);
}

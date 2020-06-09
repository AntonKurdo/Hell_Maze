import {takeEvery, put, select} from 'redux-saga/effects';


function* workerDestroyWalls() {
    let matrix = yield select(state => state.matrix);
    let catched_skills = yield select(state => state.catched_skills);
    let bossX = yield select(state => state.boss_coords_x);
    let bossY = yield select(state => state.boss_coords_y);
        
    if (catched_skills === 3) {             
            matrix[bossY-1][bossX] = 'empty';
            matrix[bossY][bossX-1] = 'empty';
            matrix[bossY-1][bossX-1] = 'empty';
            matrix[bossY+1][bossX] = 'empty';
            matrix[bossY+1][bossX+1] = 'empty';
            matrix[bossY+1][bossX-1] = 'empty';
            matrix[bossY-1][bossX+1] = 'empty';
            matrix[bossY][bossX+1] = 'empty';
        yield put({type: "SET_MATRIX", payload: matrix});
    }

}

export function* watchCathedSkills() {
    yield takeEvery('CATCH_SKILL', workerDestroyWalls)
}
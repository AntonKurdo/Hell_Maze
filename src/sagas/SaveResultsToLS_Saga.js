import {takeEvery, put, select} from 'redux-saga/effects';

function* workerSaveToLocalStorage() {
    let results = yield select(state => state.results)
    localStorage.setItem('Maze_results', JSON.stringify(results))     
}
function* workerUseResultsFromLocalStorage() {
    let results = JSON.parse(localStorage.getItem('Maze_results'));
    if(results) {
        yield put({type: 'RENDER_RESULTS', payload: results})
    }    
}

export function * watchSaveToLocalStorage() {
    yield takeEvery('SAVE_RESULTS', workerSaveToLocalStorage)
}
export function * watchUseResultsFromLocalStorage() {
    yield takeEvery('RESULTS_IN_LS', workerUseResultsFromLocalStorage)
}

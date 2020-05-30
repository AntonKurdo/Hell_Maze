import { connect } from 'react-redux';
import Board from '../components/Board'

export default connect(
state => ({
    cols: state.cols,
    rows: state.rows,
    certificates: state.certificates,
    width: state.width,
    gender: state.gender.avatar,
    matrix: state.matrix,
    viewport: state.viewPortSize,
    currentOffSet: state.currentOffSet   
}),
dispatch => ({  
    onSetMatrix: (matrix) => {
        dispatch({type: 'SET_MATRIX', payload: matrix})
    }, 
    onChangeX: (coords) => {
        dispatch({type: 'ON_CHANGE_X', payload: coords})
    },
    onChangeY: (coords) => {
        dispatch({type: 'ON_CHANGE_Y', payload: coords})
    },
    newGame: () => {
        dispatch({type: 'NEW_GAME'})
    }
})
)(Board)
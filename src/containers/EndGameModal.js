import { connect } from 'react-redux';

import Modal from '../components/EndGameModal';

export default connect(
state => ({    
    isGameEnd: state.isGameEnd,
    steps: state.steps,
    level: state.level
}),
dispatch => ({     
    onCancel: () => {
        // dispatch({type: 'NEW_GAME'})
        dispatch({type: 'CLOSE_MODAL'})                    
    },
    onSave: (name, steps, level) => {
        dispatch({type: 'SAVE_RESULTS', payload: {name: name, steps: steps, level: level}})
        dispatch({type: 'CLOSE_MODAL'})  
    }
})
)(Modal)
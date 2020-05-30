import { connect } from 'react-redux';

import MoveUp from '../components/Moves';

export default connect(
state => ({  
  
}),
dispatch => ({     
    onUp: () => {
        dispatch({type: 'ON_CHECK_CERTIFICATES', payload: 'UP'})
        dispatch({type: 'ON_CHECK_WALLS', payload: 'UP'})           
    },  
    onDown: () => {
        dispatch({type: 'ON_CHECK_CERTIFICATES', payload: 'DOWN'})
        dispatch({type: 'ON_CHECK_WALLS', payload: 'DOWN'})     
    },  
    onLeft: () => {
        dispatch({type: 'ON_CHECK_CERTIFICATES', payload: 'LEFT'})
        dispatch({type: 'ON_CHECK_WALLS', payload: 'LEFT'})         
    },  
    onRight: () => {
        dispatch({type: 'ON_CHECK_CERTIFICATES', payload: 'RIGHT'})
        dispatch({type: 'ON_CHECK_WALLS', payload: 'RIGHT'})      
    }  
})
)(MoveUp)
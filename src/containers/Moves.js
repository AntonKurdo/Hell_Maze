import { connect } from 'react-redux';

import MoveUp from '../components/Moves';

export default connect(
state => ({    
}),
dispatch => ({     
    onUp: () => {
        dispatch({type: 'BOSS_CATCHING', payload: 'UP'})    
        dispatch({type: 'ON_CHECK_CERTIFICATES', payload: 'UP'})
        dispatch({type: 'ON_CHECK_SKILLS', payload: 'UP'})
        dispatch({type: 'ON_CHECK_WALLS', payload: 'UP'})                 
                    
    },  
    onDown: () => { 
        dispatch({type: 'BOSS_CATCHING', payload: 'DOWN'})      
        dispatch({type: 'ON_CHECK_CERTIFICATES', payload: 'DOWN'})
        dispatch({type: 'ON_CHECK_SKILLS', payload: 'DOWN'})
        dispatch({type: 'ON_CHECK_WALLS', payload: 'DOWN'})                          
    },  
    onLeft: () => {   
        dispatch({type: 'BOSS_CATCHING', payload: 'LEFT'})           
        dispatch({type: 'ON_CHECK_CERTIFICATES', payload: 'LEFT'})
        dispatch({type: 'ON_CHECK_SKILLS', payload: 'LEFT'})     
        dispatch({type: 'ON_CHECK_WALLS', payload: 'LEFT'})                                        
    },  
    onRight: () => {   
        dispatch({type: 'BOSS_CATCHING', payload: 'RIGHT'})      
        dispatch({type: 'ON_CHECK_CERTIFICATES', payload: 'RIGHT'})
        dispatch({type: 'ON_CHECK_SKILLS', payload: 'RIGHT'})
        dispatch({type: 'ON_CHECK_WALLS', payload: 'RIGHT'})                                  
    }  
})
)(MoveUp)
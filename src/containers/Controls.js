import { connect } from 'react-redux';
import Controls from '../components/Controls'

export default connect(
state => ({
    gender: state.gender.word,
    level: state.level,
    viewport: state.viewPortSize
}),
dispatch => ({  
    onChangeLevel: (value) => {
        if(value === 'easy') {
        dispatch({type: "LEVEL_CHANGED_ON_EASY"})
        }
        if(value === 'middle') {
        dispatch({type: "LEVEL_CHANGED_ON_MIDDLE"})
        }
        if(value === 'hard') {
        dispatch({type: "LEVEL_CHANGED_ON_HARD"})
        }
    },
    onChangeGender: (value) => {
        if(value === 'male') {
            dispatch({type: "GENDER_CHANGED_ON_MALE"})
            }
            if(value === 'female') {
            dispatch({type: "GENDER_CHANGED_ON_FEMALE"})
            }
            if(value === 'devil') {
            dispatch({type: "GENDER_CHANGED_ON_DEVIL"})
            }
    },
    onChangeViewPortSize: (value) => {
       switch(value) {
        case '5': 
        dispatch({type: "VIEWPORT_CHANGED_ON_5"});
        break;
        case '10': 
        dispatch({type: "VIEWPORT_CHANGED_ON_10"});
        break;
        case '15': 
        dispatch({type: "VIEWPORT_CHANGED_ON_15"});
        break;
        default:
       }
       
    
          
    }
})
)(Controls)
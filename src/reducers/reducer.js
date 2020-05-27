import update from 'immutability-helper';

const initialState = {
    level: 'easy',
    cols: 16,
    rows: 15,
    certificates: 8, 
    width: 6,
    gender: {avatar: '👿', word: 'devil'},
    matrix: [],
    viewPortSize:9
};


export default function(state = initialState, action) {
    switch(action.type) {
        case 'LEVEL_CHANGED_ON_EASY':
            return update(state, {
                level: {$set: 'easy'},
                cols: {$set: 16},
                rows: {$set: 15},          
                certificates: {$set: 8}, 
                width: {$set: 6}
              });
        case 'LEVEL_CHANGED_ON_MIDDLE':
            return update(state, {
                level: {$set: 'middle'},
                cols: {$set: 15},
                rows: {$set: 50},          
                certificates: {$set: 15}, 
                width: {$set: 6.6}                 
              });
        case 'LEVEL_CHANGED_ON_HARD':
            return update(state, {
                level: {$set: 'hard'},
                cols: {$set: 20},
                rows: {$set: 100},          
                certificates: {$set: 25}, 
                width: {$set: 5}                  
              });
        case 'GENDER_CHANGED_ON_MALE':
            return update(state, {
                gender: {avatar: {$set: '👲'}, word: {$set: 'male'}}                 
              });
        case 'GENDER_CHANGED_ON_FEMALE':
            return update(state, {
                gender: {avatar: {$set: '👰'}, word: {$set: 'female'}}                 
              });
        case 'GENDER_CHANGED_ON_DEVIL':
            return update(state, {
                gender: {avatar: {$set: '👿'}, word: {$set: 'devil'}}              
              });
        case 'VIEWPORT_CHANGED_ON_5' :
            return update(state, {
                viewPortSize: {$set: 4}
            })             
        case 'VIEWPORT_CHANGED_ON_10' :
            return update(state, {
                viewPortSize: {$set: 9}
            })             
        case 'VIEWPORT_CHANGED_ON_15' :
            return update(state, {
                viewPortSize: {$set: 14}
            })   
        case "SET_MATRIX" : 
         return update(state, {
             matrix: {$set: action.payload}
         })     
                
        default: 
            return state;
    }
    
    
}
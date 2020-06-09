import update from 'immutability-helper';

const MIN_X_POSITION = 0;
const MAX_X_POSITION = 19;
const initialState = {
    level: 'easy',
    cols: 20,
    rows: 15,
    certificates: 8,     
    gender: {avatar: '👿', word: 'devil'},
    matrix: [],
    viewPortSize: 9,
    currentOffSetMin: 0,
    currentOffSetMax: 9,
    visibleRows: [],
    x: 0,
    y: 0,
    catched_certificates: 0,
    catched_skills: 0,
    boss_coords_x: 0,
    boss_coords_y: 0,
    isGameEnd: false,
    steps: 0,
    results: []
};


export default function(state = initialState, action) {
    switch(action.type) {
        case 'LEVEL_CHANGED_ON_EASY':
            return update(state, {
                level: {$set: 'easy'},
                cols: {$set: 20},
                rows: {$set: 15},          
                certificates: {$set: 8}              
              });
        case 'LEVEL_CHANGED_ON_MIDDLE':
            return update(state, {
                level: {$set: 'middle'},
                cols: {$set: 20},
                rows: {$set: 50},          
                certificates: {$set: 15}
                        
              });
        case 'LEVEL_CHANGED_ON_HARD':
            return update(state, {
                level: {$set: 'hard'},
                cols: {$set: 20},
                rows: {$set: 100},          
                certificates: {$set: 25}                             
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
                viewPortSize: {$set: 4},
                currentOffSetMin: {$set: 0},
                currentOffSetMax: {$set: 4}
            })             
        case 'VIEWPORT_CHANGED_ON_10' :
            return update(state, {
                viewPortSize: {$set: 9},
                currentOffSetMin: {$set: 0},
                currentOffSetMax: {$set: 9}
            })             
        case 'VIEWPORT_CHANGED_ON_15' :
            return update(state, {
                viewPortSize: {$set: 14},
                currentOffSetMin: {$set: 0},
                currentOffSetMax: {$set: 14}
            })   
        case "SET_MATRIX" : 
         return update(state, {
             matrix: {$set: action.payload}
         })     
        case "ON_UP" : 
         return update(state, { 
             matrix:{
                 [action.payload.y]: {[action.payload.x]:{$set: 'empty'}},
                 [action.payload.y - 1]: {[action.payload.x]:{$set: 'user'}}
            },
             y: {$set: action.payload.y - 1},
             steps: {$set: state.steps + 1}
             
         }) 
        case "ON_DOWN" : 
         return update(state, {
             matrix:{
                 [action.payload.y]: {[action.payload.x]:{$set: 'empty'}},
                 [action.payload.y + 1]: {[action.payload.x]:{$set: 'user'}}
            },
             y: {$set: action.payload.y + 1},
             steps: {$set: state.steps + 1}
             
         }) 
        case "ON_LEFT" :  
         return state.x > MIN_X_POSITION ? update(state, {
             matrix:{
                 [action.payload.y]: {[action.payload.x]:{$set: 'empty'}, [action.payload.x - 1]:{$set: 'user'}}               
            },
             x: {$set: action.payload.x - 1},
             steps: {$set: state.steps + 1}    
                 
         }) : state
            
        case "ON_RIGHT" : 
         return state.x < MAX_X_POSITION ? update(state, {
             matrix:{
                 [action.payload.y]: {[action.payload.x]:{$set: 'empty'}, [action.payload.x + 1]:{$set: 'user'}}              
            },
             x: {$set: action.payload.x + 1},
             steps: {$set: state.steps + 1}
             
         })  : state          
         case 'ON_CHANGE_X' :
             return update(state, {
                 x: {$set: action.payload}
             })    
         case 'ON_CHANGE_Y' :
             return update(state, {
                 y: {$set: action.payload}
             })   
         case 'CATCH_CERTIFICATE' : 
             return update(state, {
                catched_certificates: {$set: state.catched_certificates + 1}
             })
         case 'CATCH_SKILL' : 
             return update(state, {
                catched_skills: {$set: state.catched_skills + 1}
             })
         case 'NEW_GAME' : 
            return update(state, {
                catched_certificates: {$set: 0},
                catched_skills: {$set: 0},
                currentOffSet: {$set: 0},
                x: {$set: 0},
                y: {$set: 0},
                currentOffSetMin: {$set: 0},
                currentOffSetMax: {$set: state.viewPortSize},
                steps: {$set: 0}
            })
         case 'CHANGE_CURENT_OFF_SET_DOWN' : 
            return update(state, {
                currentOffSetMin: {$set: state.currentOffSetMin + 1},               
                currentOffSetMax: {$set: state.currentOffSetMax + 1}               
            })
         case 'CHANGE_CURENT_OFF_SET_UP' : 
            return update(state, {
                currentOffSetMin: {$set: state.currentOffSetMin - 1},               
                currentOffSetMax: {$set: state.currentOffSetMax - 1},              
            })      

          case 'CATCH_BORT_LIMIT_LEFT' :
            return update(state, {
                matrix:{
                    [state.y]: {[state.x]:{$set: 'empty'}, [19]: {$set: 'user'}}               
                },
                x: {$set: 19},
                steps: {$set: state.steps + 1}           
            })  
          case 'CATCH_BORT_LIMIT_RIGHT' :
            return update(state, {
                matrix:{
                    [state.y]: {[state.x]:{$set: 'empty'}, [0]: {$set: 'user'}}               
                },
                x: {$set: 0},
                steps: {$set: state.steps + 1}            
            })  
            case 'ON_CHANGE_BOSS_X' :
                return update(state, {
                    boss_coords_x: {$set: action.payload}
            })  
            case 'ON_CHANGE_BOSS_Y' :
                return update(state, {
                    boss_coords_y: {$set: action.payload}
            })  
            case 'BOSS_CATCHED' :
                return update(state, {
                    isGameEnd: {$set: true}
            })   
            case 'CLOSE_MODAL' :
                return update(state, {
                    isGameEnd: {$set: false}
                })   
            case 'SAVE_RESULTS' :
                return update(state, {
                    results: {$push: [{                       
                        name: action.payload.name,
                        steps: action.payload.steps,
                        level: action.payload.level                  
                    }]}
                })    
            case 'RENDER_RESULTS' :
                return update(state, {
                    results: {$set: action.payload}
                })    
        default: 
            return state;
    }   
}
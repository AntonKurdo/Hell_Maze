import update from 'immutability-helper';

const MIN_X_POSITION = 0;
const MAX_X_POSITION = 19;
let nextWall;
let nextBoss;
let nextCertificate;
let nextSkill;
let nextBort;
const border = 1;
let calcSkills = 0;                                 
let calcCertificates = 0;                                 


const initialState = {
    level: 'easy',
    cols: 20,
    rows: 15,
    certificates: 8,   
    areAllCertificates: true, 
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
    results: [],
    isDayMode: true   
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
        case 'ON_CHECK_WALLS' : 
            if (state.y > 0) {
                if (action.payload === 'UP') {
                    nextWall =  state.matrix[state.y - 1][state.x];
                }
            }
            if (state.y < state.rows - 1) {
                if (action.payload === 'DOWN') {
                    nextWall = state.matrix[state.y + 1][state.x];
                }
            }        
            if (action.payload === 'LEFT') {
                nextWall = state.matrix[state.y][state.x - 1];
                nextBort = state.matrix[state.y][MAX_X_POSITION];                    
            }               
            if (action.payload === 'RIGHT') {
                nextWall = state.matrix[state.y][state.x + 1];
                nextBort = state.matrix[state.y][MIN_X_POSITION];              
            }
            if (state.y > 0) {
                if (nextWall !== 'wall' && nextWall !== 'boss_wall' && action.payload === 'UP') { 
                    let toUpdateCurrentOffSet = {};
                    if (state.y - border === state.currentOffSetMin && state.y - border !== 0) {
                        toUpdateCurrentOffSet = {
                            currentOffSetMin: {$set: state.currentOffSetMin - 1},
                            currentOffSetMax: {$set: state.currentOffSetMax - 1}
                        } 
                    }               
                    return update(state, { 
                        matrix:{
                            [state.y]: {[state.x]:{$set: 'empty'}},
                            [state.y - 1]: {[state.x]:{$set: 'user'}}
                       },
                        y: {$set: state.y - 1},
                        steps: {$set: state.steps + 1},
                        ...toUpdateCurrentOffSet                                           
                    }) 
             
                }
            }
                if (state.y < state.rows - 1) {
                    if (nextWall !== 'wall' && nextWall !== 'boss_wall' && action.payload === 'DOWN') {
                        let toUpdateCurrentOffSet = {}
                        if (state.y + border === state.currentOffSetMax && state.currentOffSetMax < state.rows - 1) {
                            toUpdateCurrentOffSet = {
                                currentOffSetMin: {$set: state.currentOffSetMin + 1},
                                currentOffSetMax: {$set: state.currentOffSetMax + 1}
                            }                
                        }
                        return update(state, {
                            matrix:{
                                [state.y]: {[state.x]:{$set: 'empty'}},
                                [state.y + 1]: {[state.x]:{$set: 'user'}}
                           },
                            y: {$set: state.y + 1},
                            steps: {$set: state.steps + 1},
                            ...toUpdateCurrentOffSet                                                                                                           
                        })                         
                    }
                }
                if (nextWall !== 'wall' && nextWall !== 'boss_wall' && action.payload === 'LEFT') {
                    if(state.x === MIN_X_POSITION && nextBort !== 'wall') { 
                        let obj = {}   
                        if(nextBort === 'certificate') {
                            obj = {catched_certificates: {$set: state.catched_certificates + 1}};
                            calcCertificates += 1; 
                        } 
                        if(nextBort === 'skill') {
                            obj = {catched_skills: {$set : state.catched_skills + 1}};  
                            calcSkills += 1;      
                        }                                                             
                        return update(state, {
                            matrix:{
                                [state.y]: {[state.x]:{$set: 'empty'}, [MAX_X_POSITION]: {$set: 'user'}}               
                            },
                            x: {$set: 19},
                            steps: {$set: state.steps + 1},
                            ...obj           
                        })                         
                    } else {
                        return state.x > MIN_X_POSITION ? update(state, {
                            matrix:{
                                [state.y]: {[state.x]:{$set: 'empty'}, [state.x-1]:{$set: 'user'}}               
                           },
                            x: {$set: state.x - 1},
                            steps: {$set: state.steps + 1}                                    
                        }) : state
                    }
                }
                if (nextWall !== 'wall' && nextWall !== 'boss_wall' && action.payload === 'RIGHT') {
                    if(state.x === MAX_X_POSITION && nextBort !== 'wall') {
                        let obj = {}   
                        if(nextBort === 'certificate') {
                            obj = {catched_certificates: {$set: state.catched_certificates + 1}};
                            calcCertificates += 1; 
                        } 
                        if(nextBort === 'skill') {
                            obj = {catched_skills: {$set : state.catched_skills + 1}};  
                            calcSkills += 1;      
                        }                         
                        return update(state, {
                            matrix:{
                                [state.y]: {[state.x]:{$set: 'empty'}, [MIN_X_POSITION]: {$set: 'user'}}               
                            },
                            x: {$set: 0},
                            steps: {$set: state.steps + 1},
                            ...obj            
                        })  
                    } else {
                        return state.x < MAX_X_POSITION ? update(state, {
                            matrix:{
                                [state.y]: {[state.x]:{$set: 'empty'}, [state.x + 1]:{$set: 'user'}}              
                           },
                            x: {$set: state.x + 1},
                            steps: {$set: state.steps + 1}                            
                        })  : state    
                    }
                }
                return state

               
        case 'ON_CHANGE_X' :
             return update(state, {
                 x: {$set: action.payload}
             })    
        case 'ON_CHANGE_Y' :
             return update(state, {
                 y: {$set: action.payload}
             })   
     
        case 'ON_CHECK_SKILLS' :
         
            if(state.y > 0) {
                if (action.payload === 'UP') {
                    nextSkill = state.matrix[state.y - 1][state.x];
                }  
            }  
            if(state.y < state.rows - 1 ) {
                if (action.payload === 'DOWN') {
                    nextSkill = state.matrix[state.y + 1][state.x];
                }
            }
            if (action.payload === 'LEFT') {
                nextSkill = state.matrix[state.y][state.x - 1];
            }
            if (action.payload === 'RIGHT') {
                nextSkill = state.matrix[state.y][state.x + 1];
            }
            if (nextSkill === 'skill') {  
             calcSkills += 1;         
             let obj;
             if (calcSkills === 3) {    
                obj = {
                    matrix: {
                        [state.boss_coords_y-1]: {[state.boss_coords_x] : {$set: 'empty'}, [state.boss_coords_x-1] : {$set: 'empty'}, [state.boss_coords_x+1] : {$set: 'empty'}},
                        [state.boss_coords_y]: {[state.boss_coords_x-1] : {$set: 'empty'}, [state.boss_coords_x+1] : {$set: 'empty'}, [state.boss_coords_x+1] : {$set: 'empty'}},                              
                        [state.boss_coords_y+1]:{[state.boss_coords_x] : {$set: 'empty'}, [state.boss_coords_x+1] : {$set: 'empty'}, [state.boss_coords_x-1] : {$set: 'empty'}}                      
                    }                                       
                } 
                calcSkills = 0;              
             }  
                return update(state, {
                    catched_skills: {$set: state.catched_skills + 1},
                    ...obj
                })                              
            }
            return state;
            
        case 'NEW_GAME' : 
            calcSkills = 0;                                 
            calcCertificates = 0; 
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
         
        case 'ON_CHANGE_BOSS_X' :
                return update(state, {
                    boss_coords_x: {$set: action.payload}
            })  
        case 'ON_CHANGE_BOSS_Y' :
                return update(state, {
                    boss_coords_y: {$set: action.payload}
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
        case 'BOSS_CATCHING' :               
                if (state.y > 0) {
                    if (action.payload === 'UP') {              
                        nextBoss = state.matrix[state.y - 1][state.x];         
                    }
                }
                if (state.y < state.rows - 1) {
                    if (action.payload === 'DOWN') {           
                        nextBoss =  state.matrix[state.y + 1][state.x];
                    }
                }
                if (action.payload === 'LEFT') {        
                    nextBoss = state.matrix[state.y][state.x - 1];
                }
                if (action.payload === 'RIGHT') {      
                    nextBoss = state.matrix[state.y][state.x + 1];
                }
                if (nextBoss === 'boss') {   
                    return update(state, {
                        isGameEnd: {$set: true}
                    })                    
                }  
                return state; 
                             
        case 'ON_CHECK_CERTIFICATES':
                    if (state.y > 0) {
                        if (action.payload === 'UP') {
                                nextCertificate = state.matrix[state.y - 1][state.x];  
                        }                        
                    }                       
                    if (state.y < state.rows - 1) {
                        if (action.payload === 'DOWN') {
                            nextCertificate = state.matrix[state.y + 1][state.x];
                        }
                    }                       
                    if (action.payload === 'LEFT') {
                        nextCertificate = state.matrix[state.y][state.x - 1];
                    }                        
                    if (action.payload === 'RIGHT') {
                        nextCertificate = state.matrix[state.y][state.x + 1];                               
                    }       
                    if (nextCertificate === 'certificate') {
                        let obj = {};
                        obj.matrix = {};
                        calcCertificates += 1;
                        if(calcCertificates === state.certificates && state.areAllCertificates) {                              
                            let generated = 0; 
                            const endSkillsNumber = 3;   
                            while (generated < endSkillsNumber) {                                
                                let row = Math.round(Math.random() * (state.rows - 1));
                                let col = Math.round(Math.random() * (state.cols - 1));
                                let item = state.matrix[row][col];
                                 if(!Object.keys(obj.matrix).includes(row.toString()) && item === 'empty') {                                     
                                         obj.matrix[row] = {[col]: {$set :'skill'}};                                     
                                         generated += 1;                                       
                                }                                                                                  
                            }                                
                            calcCertificates = 0;
                        }
                        return update(state, {
                            catched_certificates: {$set: state.catched_certificates + 1},
                            areAllCertificates: {$set: true},
                            ...obj                               
                        })                                                      
                    }                                                                                  
                    return state;  
        case 'NIGHT_MODE' : 
                    return update(state, {
                        isDayMode: {$set: false}
                    })                     
        case 'DAY_MODE' : 
                    return update(state, {
                        isDayMode: {$set: true}
                    })                     

            default: 
                return state;
    }   
}
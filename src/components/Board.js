import React from 'react';
const EMPTY = 'empty';
const SKILL = 'skill';
const WALL = 'wall';
const USER = 'user';

export default function board({cols, rows, certificates, width, gender}) {
 
    let matrix = [];   

    for(let i = 1; i <= rows; i++) {
        let row = [];
        for(let j = 1; j <= cols; j++) {
            row.push(EMPTY)          
        }  
        row[Math.round(Math.random() * (cols-1))] = WALL;
        row[Math.round(Math.random() * (cols-1))] = WALL;
        row[Math.round(Math.random() * (cols-1))] = WALL;
       
        matrix.push(row);        
    }


    function userPosition() {
        let row = Math.round(Math.random() * (rows - 1));
        let col = Math.round(Math.random() * (cols -1))
        matrix[row][col] = USER;
    }
   
    function certificatesPosition() {
        for(let i = 1; i <= certificates; i++) {
            let row = Math.round(Math.random() * (rows - 1));
            let col = Math.round(Math.random() * (cols - 1))
            matrix[row][col] = SKILL;
        }
    }

    certificatesPosition();
    userPosition();

       
   function contain(item) {
    switch(item) {
        case 'empty':
            return ''        
        case 'wall':
            return <div className='wallItem'></div>
        case 'skill':
            return <span className='skillItem'>👑</span>    
        case 'user':
            return <span className='userItem'>{gender}</span>    
        default: return ''
    }
   }
    return (
        <React.Fragment>             
            <div className='board_cont'>
               {
                   matrix.map((row, index) => {
                       return(
                           <div key={index+1} className='row'>
                              {row.map((item, index1) => {
                                  return (
                                   <div key={(index+ 1) + (index1+1)} id={(index+ 1) + (index1+1)}  className='item' style={{width: width + '%'}}> {contain(item)} </div>
                                  )
                              })}
                           </div>                           
                       )
                   })
               }
            </div>
        </React.Fragment>
                  
    )
    
}

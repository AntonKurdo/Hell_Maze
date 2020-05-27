import React from "react";
const EMPTY = 'empty';
const SKILL = 'skill';
const WALL = 'wall';
const USER = 'user';

export default function board({cols, rows, certificates, width, gender, matrix, viewport, onSetMatrix}) { 
  
   for(let i = 1; i <= rows; i++) {
        let row = [];
        for(let j = 1; j <= cols; j++) {
            row.push(EMPTY)          
        }  
        for(let g = 0; g <= 3; g++) {
            row[Math.round(Math.random() * (cols-1))] = WALL;              
        }      
        matrix.push(row);  
                 
    }
  
    function certificatesPosition() {
        for(let i = 1; i <= certificates; i++) {
            let row = Math.round(Math.random() * (rows - 1));
            let col = Math.round(Math.random() * (cols - 1));
            matrix[row][col] = SKILL; 
        }    
    }

    function userPosition() {
        let row = Math.round(Math.random() * (rows - 1));
        let col = Math.round(Math.random() * (cols -1));       
        matrix[row][col] === EMPTY ? matrix[row][col] = USER : userPosition();      
             
    }

    certificatesPosition();
    userPosition();    
    // onSetMatrix(matrix);
    


//    matrix[0][0] = USER;
 
       
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

   const currentOffSet = 0;
   const viewPortSize = viewport;
   const visibleRows = []
   for(let index = currentOffSet; index <= currentOffSet + viewPortSize; index++) {
        const row = matrix[index];
        visibleRows.push(<div key={index} id={index+1} className='row'>
                                        {row.map((item, index) => {
                                            return (
                                            <div key={(index+ 1) + (index+1)} x={index+1} y={index+1}  className='item' style={{width: width + '%'}}> {contain(item)} </div>
                                            )
                                        })}
                                    </div>)
   }
    return (
        <React.Fragment>             
            <div className='board_cont'>
               {visibleRows}
            </div>
        </React.Fragment>                  
    )    
}

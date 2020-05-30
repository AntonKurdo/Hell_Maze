import React, {useEffect} from "react";

const EMPTY = 'empty';
const CERTIFICATE = 'certificate';
const SKILL = 'skill';
const WALL = 'wall';
const USER = 'user';

export default function Board({
    cols,
    rows,
    certificates,
    width,
    gender,
    matrix,
    viewport,
    currentOffSet,
    onSetMatrix,  
    onChangeX,
    onChangeY,
    newGame
}) {
    let visibleRows = [];
    useEffect(() => {
        newGame();
        let matrix1 = [];
        for (let i = 1; i <= rows; i++) {
            let row = [];
            for (let j = 1; j <= cols; j++) {
                row.push(EMPTY)
            }
            for (let g = 0; g <= 3; g++) {
                row[Math.round(Math.random() * (cols - 1))] = WALL;
            }
            matrix1.push(row);
        }

        function certificatesPosition() {
            for (let i = 1; i <= certificates; i++) {
                let row = Math.round(Math.random() * (rows - 1));
                let col = Math.round(Math.random() * (cols - 1));
                matrix1[row][col] = CERTIFICATE;
            }
        }
        function skillsPosition() {
            for (let i = 1; i <= 3; i++) {
                let row = Math.round(Math.random() * (rows - 1));
                let col = Math.round(Math.random() * (cols - 1));
                matrix1[row][col] = SKILL;
            }
            onSetMatrix(matrix1);
        }

        function userPosition() {
            let row = Math.round(Math.random() * (rows - 1));
            let col = Math.round(Math.random() * (cols - 1));
            onChangeX(col);
            onChangeY(row);
            matrix1[row][col] === EMPTY
                ? matrix1[row][col] = USER
                : userPosition();
        }

        certificatesPosition();

        userPosition();
        onSetMatrix(matrix1);

    }, [])

    function contain(item) {
        switch (item) {
            case 'empty':
                return ''
            case 'wall':
                return <div className='wallItem'></div>
            case 'certificate':
                return <span className='certItem'>👑</span>
            case 'skill':
                return <span className='skillItem'>📱</span>
            case 'user':
                return <span className='userItem'>{gender}</span>
            default:
                return ''
        }
    }

   
    function setVisibleRows(matrix) {
        if (matrix.length !== 0) {
            for (let index = currentOffSet; index <= currentOffSet + viewport; index++) {
                const row = matrix[index];
                visibleRows.push(
                    <div key={index} id={index + 1} className='row'>
                        {row.map((item, index) => {
                            return (
                                <div
                                    key={(index + 1) + (index + 1)}
                                    className='item'
                                    style={{
                                    width: width + '%'
                                }}>
                                    {contain(item)}
                                </div>
                            )
                        })}
                    </div>
                )
            }           
        }
   }

    return (
        <React.Fragment>
            <div className='board_cont'>
                {setVisibleRows(matrix)}
                {visibleRows}
                {/* {matrix.map((row, ind) => {
                    return (
                        <div key={ind} className='row'>

                            {row.map((item1, index) => {
                                return (
                                    <div
                                        key={index}
                                        className='item'
                                        style={{
                                        width: width + '%'
                                    }}>
                                        {contain(item1)}
                                    </div>
                                )
                            })}
                        </div>

                    )
                })
} */}

            </div>
        </React.Fragment>
    )
}

import React, {useEffect} from "react";

const EMPTY = 'empty';
const CERTIFICATE = 'certificate';
const WALL = 'wall';
const USER = 'user';
const BOSS = 'boss';
const BOSSWALL = 'boss_wall';

export default function Board({
    cols,
    rows,
    certificates,
    gender,
    matrix,
    viewport,
    currentOffSet,
    onSetMatrix,
    onChangeX,
    onChangeY,
    newGame,  
    onChangeBossX,
    onChangeBossY
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
            let certificatesNumber = 0;
            while (certificatesNumber < certificates) {
                let row = Math.round(Math.random() * (rows - 1));
                let col = Math.round(Math.random() * (cols - 1));
                if (matrix1[row][col] !== CERTIFICATE && matrix1[row][col] !== BOSSWALL && matrix1[row][col] !== BOSS && matrix1[row][col] !== USER) {
                    matrix1[row][col] = CERTIFICATE;
                    certificatesNumber += 1;
                }

            }
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
        function bossPosition() {
            let col = Math.round(Math.random() * (17 - 4) + 4);
            let row = Math.round(Math.random() * ((rows-3) - 4) + 4);
            console.log(row, col)
            onChangeBossX(col);
            onChangeBossY(row);
            matrix1[row][col] = BOSS;
            matrix1[row - 1][col] = BOSSWALL;
            matrix1[row][col - 1] = BOSSWALL;
            matrix1[row - 1][col - 1] = BOSSWALL;
            matrix1[row + 1][col] = BOSSWALL;
            matrix1[row + 1][col + 1] = BOSSWALL;
            matrix1[row + 1][col - 1] = BOSSWALL;
            matrix1[row - 1][col + 1] = BOSSWALL;
            matrix1[row][col + 1] = BOSSWALL;

        }
        bossPosition();
        matrix1[0][0] = USER
        certificatesPosition();

        // userPosition();
        onSetMatrix(matrix1);

       
    }, [])

    function contain(item) {
        switch (item) {
            case 'empty':
                return ''
            case 'wall':
                return <div className='wallItem'></div>
            case 'boss_wall':
                return <div className='boss_wallItem'></div>
            case 'certificate':
                return <span className='certItem'>👑</span>
            case 'skill':
                return <span className='skillItem'>💼</span>
            case 'boss':
                return <span className='bossItem'>💀</span>
            case 'user':
                return <span className='userItem'>{gender}</span>
            default:
                return ''
        }
    }

    function setVisibleRows(matrix, currentOffSet) {
        if (matrix.length !== 0) {
            for (let index = currentOffSet; index <= currentOffSet + viewport; index++) {
                const row = matrix[index];
                visibleRows.push(
                    <div key={index} id={index + 1} className='row'>
                        {row.map((item, index) => {
                            return (
                                <div
                                    key={(index + 1) + (index + 1)}
                                    className='item'>
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
        <div className='game_plate'>
            <div className='board_cont'>
                {setVisibleRows(matrix, currentOffSet)}
                {visibleRows}
            </div>
        </div>
    )
}

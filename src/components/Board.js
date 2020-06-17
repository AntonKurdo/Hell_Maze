import React, {useEffect} from "react";
import PropTypes from 'prop-types';

const EMPTY = 'empty';
const CERTIFICATE = 'certificate';
const SKILL = 'skill';
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
    isDayMode,
    onSetMatrix,  
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
        function bossPosition() {
            let col = Math.round(Math.random() * (17 - 4) + 4);
            let row = Math.round(Math.random() * ((rows-3) - 4) + 4);           
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
        onSetMatrix(matrix1);

       
    }, [])

    function contain(item) {
        switch (item) {
            case EMPTY:
                return ''
            case WALL:
                return <div className='wallItem'></div>
            case BOSSWALL:
                return <div className='boss_wallItem'></div>
            case CERTIFICATE:
                return <span className='certItem' role='img' aria-label="certificate_emoji">👑</span>
            case SKILL:
                return <span className='skillItem' role='img' aria-label="skill_emoji">💼</span>
            case BOSS:
                return <span className='bossItem' role='img' aria-label="boss_emoji">💀</span>
            case USER:
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
            <div className={isDayMode ? 'board_cont' : 'board_cont board_cont_night'}>
                {setVisibleRows(matrix, currentOffSet)}
                {visibleRows}
            </div>
        </div>
    )
}

Board.propTypes = {
    cols: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired,
    certificates: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    matrix: PropTypes.array.isRequired,
    viewport: PropTypes.number.isRequired,
    currentOffSet: PropTypes.number.isRequired,
    isDayMode: PropTypes.bool.isRequired,
    onSetMatrix: PropTypes.func.isRequired,
    newGame: PropTypes.func.isRequired,
    onChangeBossX: PropTypes.func.isRequired,
    onChangeBossY: PropTypes.func.isRequired
}
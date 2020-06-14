import React from 'react';
import {NavLink} from 'react-router-dom';

const genders = [
    {
        id: 1,
        value: 'male',
        name: 'Male'
    }, {
        id: 2,
        value: 'female',
        name: 'Female'
    }, {
        id: 3,
        value: 'devil',
        name: 'Little devil'
    }
];
const levels = [
    {
        id: 1,
        value: 'easy',
        name: 'Easy'
    }, {
        id: 2,
        value: 'middle',
        name: 'Middle'
    }, {
        id: 3,
        value: 'hard',
        name: 'Hard'
    }
]
const viewports = [
    {
        id: 1,
        value: 5,
        name: '5'
    }, {
        id: 2,
        value: 10,
        name: '10'
    }, {
        id: 3,
        value: 15,
        name: '15'
    }
]
export default function ({
    gender,
    level,
    viewport,
    isDayMode,
    onChangeLevel,
    onChangeGender,
    onChangeViewPortSize
}) {

    function genderChange(e) {
        onChangeGender(e.target.value)
    }
    function levelChange(e) {
        onChangeLevel(e.target.value)
    }
    function viewportChange(e) {
        onChangeViewPortSize(e.target.value)
    }
    return (
        <div className='controls'>
            <label
                className={isDayMode
                ? ''
                : 'label_night'}>Choose gender:</label>
            <select value={gender} onChange={genderChange} className="form-control">
                {genders.map(option => <option key={option.id} value={option.value}>{option.name}</option>)}
            </select>
            <label
                className={isDayMode
                ? ''
                : 'label_night'}>Choose level:</label>
            <select value={level} onChange={levelChange} className="form-control">
                {levels.map(option => <option key={option.id} value={option.value}>{option.name}</option>)}
            </select>
            <label
                className={isDayMode
                ? ''
                : 'label_night'}>Choose viewport size:</label>
            <select
                value={(viewport + 1).toString()}
                onChange={viewportChange}
                className="form-control">
                {viewports.map(option => <option key={option.id} value={option.value}>{option.name}</option>)}
            </select>
            <div className='btn_new_game_cont'>
                <NavLink to='/game'>
                    <button className='btn btn-danger btn_new_game'>New game</button>
                </NavLink>
            </div>
        </div>
    )
}
import React from 'react';
import {NavLink} from 'react-router-dom';

export default function () {

    function mouseOn(e) {
        e.target.textContent = 'PRAY';
    }
    function mouseOff(e) {
        e.target.textContent = 'PLAY';
    }

    return (
        <div className="homepage">
            <div>HELL MAZE</div>
            <img
                src='https://i.pinimg.com/originals/e6/8c/9c/e68c9c6d032e019f8191e41d085495f1.png'/>
            <NavLink to='/controls'>
                <button
                    onMouseEnter={mouseOn}
                    onMouseLeave={mouseOff}
                    className='btn btn_startplay btn-danger'>PLAY</button>
            </NavLink>

        </div>
    )
}
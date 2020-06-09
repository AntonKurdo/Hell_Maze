import React from 'react';
import {NavLink} from 'react-router-dom';

export default function renderNavigation({catched_certificates, certificates, catched_skills}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                😈 Hell Maze</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className='nav-link' activeClassName='active' to="/" exact>Controls</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' activeClassName='active' to="/game">Game</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' activeClassName='active' to="/stat">Statistics</NavLink>
                    </li>
                    <div className='results'>
                        <li className='results_certificates'>
                            <span className='certificates_ava'>👑 </span>({catched_certificates} out of {certificates})
                        </li>
                        <li className='results_skills'>
                            <span className='skills_ava'>💼 </span>({catched_skills} out of 3)
                        </li>

                    </div>
                </ul>
            </div>
        </nav>
    );
}
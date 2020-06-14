import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Switch from '@material-ui/core/Switch';

export default function RenderNavigation({catched_certificates, certificates, catched_skills, dayMode, nightMode}) {

    const [state, setState] = useState({
        checked: true       
      });
   
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
       !state.checked ? dayMode() :  nightMode()
      };
    return (
        <nav className={state.checked ?  "navbar navbar-expand-lg navbar-light bg-light" : " navbar navbar_night navbar-expand-lg navbar-light bg-light" }>
            <a className="navbar-brand" href="/">
            👿 Hell Maze</a>
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
                        <NavLink className='nav-link' activeClassName='active' to="/" exact>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' activeClassName='active' to="/controls">Controls</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' activeClassName='active' to="/game">Game</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' activeClassName='active' to="/stat">Statistics</NavLink>
                    </li>
                    <div className={state.checked ? 'results' : 'results results_night'}>
                        <li className='results_certificates'>
                            <span className='certificates_ava'>👑 </span>({catched_certificates} out of {certificates})
                        </li>
                        <li className='results_skills'>
                            <span className='skills_ava'>💼 </span>({catched_skills} out of 3)
                        </li>
                        <div className='mode_btn'>
                        {state.checked ? <span style={{color: '#fdd835'}}> ☀️ </span> : <span style={{color: '#3949ab'}}>🌙</span>}
                        </div>
                        <Switch
                            checked={state.checked}
                            onChange={handleChange}
                            name="checked"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </div>
                </ul>
            </div>
        </nav>
    );
}
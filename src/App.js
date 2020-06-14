import React from 'react';
import {Switch, Route} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './containers/Navbar';
import Home from './components/Home'
import Board from './containers/Board';
import Moves from './containers/Moves'
import Controls from './containers/Controls';
import Modal from './containers/EndGameModal'
import Statistics from './containers/Statistics'
import Footer from './containers/Footer'
import '../src/styles.css'

function App({isDayMode}) {
    return (
        <div className={isDayMode ? "App" : 'App_night'}>
            <Navbar/>
            <Switch>
                <Route path='/' exact>
                    <div className='container'>
                        <Home />
                    </div>
                </Route>
                <Route path="/controls">
                    <div className='container'>
                        <Controls/>
                    </div>
                </Route>
                <Route path="/game">
                    <div className='game_cont container'>
                        <Board/>
                        <Moves/>
                        <Modal/>
                    </div>
                </Route>
                <Route path="/stat">
                    <div className='container'>
                        <Statistics/>
                    </div>
                </Route>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;

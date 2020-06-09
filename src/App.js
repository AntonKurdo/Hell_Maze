import React from 'react';
import {Switch, Route} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './containers/Navbar'
import Board from './containers/Board';
import Moves from './containers/Moves'
import Controls from './containers/Controls';
import Modal from './containers/EndGameModal'
import Statistics from './containers/Statistics'
import Footer from './components/Footer'
import '../src/styles.css'

function App() {

    return (
        <div className="App">
            <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <div className='container'>
                        <Controls/>
                    </div>
                </Route>
                <Route path="/game" exact>
                    <div className='game_cont container'>
                        <Board/>
                        <Moves/>
                        <Modal/>
                    </div>
                </Route>
                <Route path="/stat" exact>
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

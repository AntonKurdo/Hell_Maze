import React from 'react';
import {
  Switch,
  Route 
} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar'
import Board from './containers/Board';
import Controls from './containers/Controls'
import '../src/styles.css'
function App() {
  
  return (
    <div className="App container">
    <Navbar/>
    <Switch>
    <Route path="/" exact>          
        <Controls />
      </Route>
    
      <Route path="/game" exact>          
        <Board />
      </Route>
     
     </Switch>
    </div>
  );
}

export default App;

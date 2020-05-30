import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/reducer';


import { watchCheckWall } from './sagas/CheckWallsSaga';
import { watchCheckCertificates } from './sagas/CheckCertificatesSaga'
import { watchRenderSkills } from './sagas/RenderSkillsSaga'

import App from './App';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

sagaMiddleware.run(watchCheckWall);
sagaMiddleware.run(watchCheckCertificates);
sagaMiddleware.run(watchRenderSkills);



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store = {store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



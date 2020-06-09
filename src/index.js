import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/reducer';


import { watchCheckWall } from './sagas/CheckWallsSaga';
import { watchCheckCertificates } from './sagas/CheckCertificatesSaga';
import { watchRenderSkills } from './sagas/RenderSkillsSaga';
import { watchCheckSkills } from './sagas/CheckSkillsSaga';
import { watchCheckCurrentOffSet } from './sagas/CheckCurrentOffSetSaga';
import { watchBortsLimits } from './sagas/CheckBortLimits';
import { watchCathedSkills } from './sagas/DestroyBossWallsSaga';
import { watchCatchBoss } from './sagas/Catch_Boss_Saga';
import { watchSaveToLocalStorage, watchUseResultsFromLocalStorage } from './sagas/SaveResultsToLS_Saga';

import App from './App';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

sagaMiddleware.run(watchCheckWall);
sagaMiddleware.run(watchCheckCertificates);
sagaMiddleware.run(watchRenderSkills);
sagaMiddleware.run(watchCheckSkills);
sagaMiddleware.run(watchCheckCurrentOffSet);
sagaMiddleware.run(watchBortsLimits);
sagaMiddleware.run(watchCathedSkills);
sagaMiddleware.run(watchCatchBoss);
sagaMiddleware.run(watchSaveToLocalStorage);
sagaMiddleware.run(watchUseResultsFromLocalStorage);



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



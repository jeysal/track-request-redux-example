import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers';
import rootEpic from './epics';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/track-request-redux-example">
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();

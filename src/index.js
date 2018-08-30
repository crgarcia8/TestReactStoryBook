import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Login from './components/login';

import App from './components/app';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
  <BrowserRouter><Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider></BrowserRouter>
  , document.querySelector('.mainContainer'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import rootReducer from './store';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ), 
  document.querySelector('#root')
);
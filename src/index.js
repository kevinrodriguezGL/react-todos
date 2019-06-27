import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import { TodosProvider } from './context/todos';
import App from './components/App';

ReactDOM.render(
  (
    <TodosProvider>
      <App />
    </TodosProvider>
  ), 
  document.querySelector('#root')
);
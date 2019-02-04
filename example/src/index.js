import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'state-template';

import 'state-template/dist/style/core/css/colorscheme-oceanside.css';

import App from './containers/App';

const reducers = {};

const sagas = [];

const store = configureStore({ reducers, sagas });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

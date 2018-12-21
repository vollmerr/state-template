import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App, { configureStore } from '../lib';
import '../lib/style/core/css/colorscheme-oceanside.css';

import routes from './routes';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App routes={routes} />
  </Provider>,
  document.getElementById('root'),
);

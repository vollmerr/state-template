import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // eslint-disable-line import/no-extraneous-dependencies

import App, { configureStore } from './lib';

import './lib/style/core/css/cagov.core.css';
import './lib/style/core/css/colorscheme-oceanside.css';
// import './style/style.scss';

const store = configureStore();

const Form = () => <div>in form</div>;
const Home = () => <div>in home</div>;
const Help = () => <div>in help</div>;

// order here determines order in navigation menu
export const routesByKey = {
  home: {
    key: 'home',
    name: 'Home',
    path: '/',
    exact: true,
    icon: 'ca-gov-icon-home',
    component: Home,
  },
  form: {
    key: 'form',
    name: 'Form',
    path: '/form',
    exact: true,
    icon: 'ca-gov-icon-pencil-edit',
    component: Form,
  },
  help: {
    key: 'help',
    name: 'Help',
    path: '/help',
    exact: true,
    icon: 'ca-gov-icon-question-line',
    component: Help,
  },
};

const routes = Object.values(routesByKey);

ReactDOM.render(
  <Provider store={store}>
    <App routes={routes} />
  </Provider>,
  document.getElementById('root'),
);

// import Form from '../Form';
// import Home from '../Home';
// import Help from '../Help';
import React from 'react';

const Home = () => <div>in home</div>;
const Form = () => <div>in Form</div>;
const Help = () => <div>in Help</div>;

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

export default Object.values(routesByKey);

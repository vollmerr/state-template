import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // eslint-disable-line import/no-extraneous-dependencies

import App, * as ST from './lib';

import './lib/style/core/css/cagov.core.css';
import './lib/style/core/css/colorscheme-oceanside.css';
// import './style/style.scss';

import imgSrc from './lib/images/Ca-Gov-Logo-Gold.svg';

const store = ST.configureStore();

const Form = () => (
  <>
    <ST.BannerPrimary src={imgSrc} height={'450px'} />
    <ST.MainContent>
      <ST.MainPrimary>
        <ST.Section variant={'standout'}>
          <ST.Container>
            <h1>In form...</h1>
          </ST.Container>
        </ST.Section>
        <ST.Section>
          <ST.Container>
          In form content...
          </ST.Container>
        </ST.Section>
      </ST.MainPrimary>
    </ST.MainContent>
  </>
);

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
    <App
      routes={routes}
      // brandingLogo={imgSrc}
    />
  </Provider>,
  document.getElementById('root'),
);

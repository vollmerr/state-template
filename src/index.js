import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // eslint-disable-line import/no-extraneous-dependencies
import { HashRouter } from 'react-router-dom';

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
          <ST.LoadingSection>
            <ST.Container>
            In form content...
            </ST.Container>
          </ST.LoadingSection>
        </ST.Section>
      </ST.MainPrimary>
    </ST.MainContent>
  </>
);

const aLotOfData = Array(300).fill(0).map((x, i) => ({
  id: i,
  col1: `row ${i} col 1`,
  col2: `row ${i} col 2`,
}));

const Home = () => (
  <ST.MainContent>
    <ST.Section>
      <ST.MainPrimary>
        <ST.Table
          data={aLotOfData}
          headers={{ col1: 'column 1', col2: 'column 2' }}
          title={'example title...'}
          onClickRow={row => alert(`you click on row ${row.id}`)}
        />
      </ST.MainPrimary>
    </ST.Section>
  </ST.MainContent>
);


const Help = () => (
  <ST.MainContent>
    <ST.Section>
      <ST.MainPrimary>
        <ST.LinkButton to={'/'} text={'home...'} />
      </ST.MainPrimary>
    </ST.Section>
  </ST.MainContent>
);

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

import React from 'react';

import { NavTabs } from '../../lib';
import Page from '../Page';

import StatusMessages from './StatusMessages';
import LoadingIndicator from './LoadingIndicator';

const routes = [
  {
    key: 'statusMessages',
    name: 'Status Messages',
    path: '/statusMessages',
    exact: true,
    component: StatusMessages,
  },
  {
    key: 'loadingIndicator',
    name: 'Loading Indicator',
    path: '/loadingIndicator',
    exact: true,
    component: LoadingIndicator,
  },
];

const Status = () => (
  <Page title={'Tables'}>
    <NavTabs routes={routes} defaultPath={'/loadingIndicator'} />
  </Page>
);

export default Status;

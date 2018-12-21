import StatusMessages from './StatusMessages';

export const routesByKey = {
  statusMessages: {
    key: 'statusMessages',
    name: 'Status Messages',
    path: '/statusMessages',
    exact: true,
    icon: 'ca-gov-icon-home',
    component: StatusMessages,
  },
};

export default Object.values(routesByKey);

import Tables from './Tables';
import StatusMessages from './StatusMessages';

export const routesByKey = {
  tables: {
    key: 'tables',
    name: 'Tables',
    path: '/tables',
    exact: true,
    icon: 'ca-gov-icon-home',
    component: Tables,
  },
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

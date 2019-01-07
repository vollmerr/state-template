import Tables from './Tables';
import Status from './Status';

export const routesByKey = {
  status: {
    key: 'status',
    name: 'Status',
    path: '/status',
    icon: 'ca-gov-icon-home',
    component: Status,
  },
  tables: {
    key: 'tables',
    name: 'Tables',
    path: '/tables',
    exact: true,
    icon: 'ca-gov-icon-home',
    component: Tables,
  },
};

export default Object.values(routesByKey);
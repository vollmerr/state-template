import Home from '../Home';
import OtherRoute from '../OtherRoute';

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
  otherRoute: {
    key: 'other',
    name: 'Other Route',
    path: '/other',
    exact: true,
    icon: 'ca-gov-icon-home',
    component: OtherRoute,
  },
};

export default Object.values(routesByKey);

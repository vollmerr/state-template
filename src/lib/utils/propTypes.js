import T from 'prop-types';

export const routeProp = T.shape({
  /** Unique identifier for route */
  key: T.string.isRequired,
  /** Name of path */
  name: T.string.isRequired,
  /** URL path to route */
  path: T.string.isRequired,
  /** If route should be hidden from navigation menus */
  hidden: T.bool,
  /** If route needs to exatcly match */
  exact: T.bool,
  /** Icon to display in avigation menus */
  icon: T.string,
  /** Component to render */
  component: T.func.isRequired,
});

import T from 'prop-types';

export const routeProp = T.shape({
  key: T.string.isRequired,
  name: T.string.isRequired,
  path: T.string.isRequired,
  exact: T.bool,
  icon: T.string,
  component: T.func.isRequired,
});

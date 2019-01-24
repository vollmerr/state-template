import T from 'prop-types';

export const route = T.shape({
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

export const contactLink = T.shape({
  /** Text to display */
  text: T.string.isRequired,
  /** Internal link to navigate to */
  to: T.string,
  /** External link to navigate to */
  href: T.string,
});

export const brandingLogo = T.shape({
  /** Source of image */
  src: T.string.isRequired,
  /** Alt description of image */
  alt: T.string.isRequired,
  /** Internal link to navigate to */
  to: T.string,
  /** External link to navigate to */
  href: T.string,
});

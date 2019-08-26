import T from 'prop-types';
import odiLogo from '../images/office-of-digital-innovation-logo.png';

export const route = T.shape({
  /** Unique identifier for route */
  key: T.string.isRequired,

  /** Name of path */
  name: T.string.isRequired,

  /** URL path to route (required for internal links) */
  path: T.string,

  /** URL path to route (required for external links) */
  href: T.string,

  /** If route should be hidden from navigation menus */
  hidden: T.bool,

  /** If route needs to exatcly match */
  exact: T.bool,

  /** Icon to display in avigation menus */
  icon: T.string,

  /** Component to render (required for internal links) */
  component: T.func,
});

export const contactLink = T.shape({
  /** Text to render */
  text: T.string.isRequired,

  /** Internal link to navigate to */
  to: T.string,

  /** External link to navigate to */
  href: T.string,
});

export const contactLinkDefault = {
  text: 'Contact Us',
  href: 'https://cdt.ca.gov/support/',
};

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

export const brandingLogoDefault = {
  src: odiLogo,
  alt: 'Office of Digital Innovation logo',
  href: 'https://cdt.ca.gov/',
};

export const option = T.shape({
  /** Label to render for option */
  label: T.string.isRequired,

  /** Internal value of option */
  value: T.oneOfType([T.string, T.bool, T.number]),
});

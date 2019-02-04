import * as React from 'react';

export interface route {
  /** Unique identifier for route */
  key: string;

  /** Name of path */
  name: string;

  /** URL path to route */
  path: string;

  /** If route should be hidden from navigation menus */
  hidden?: boolean;

  /** If route needs to exatcly match */
  exact?: boolean;

  /** Icon to render in avigation menus */
  icon?: string;

  /** Component to render */
  component: (props: any) => React.ReactNode;
}

export interface contactLink {
  /** Text to render */
  text: string;

  /** Internal link to navigate to */
  to?:  string;

  /** External link to navigate to */
  href?: string,
}

export interface brandingLogo {
  /** Source of image */
  src: string;

  /** Alt description of image */
  alt: string;

  /** Internal link to navigate to */
  to?: string,

  /** External link to navigate to */
  href?: string;
}

export interface option {
  /** Label to render for option */
  label: string;

  /** Internal value of option */
  value: string;
}

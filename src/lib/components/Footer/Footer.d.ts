import * as React from 'react';

import * as types from '../../utils/types';

export interface FooterProps {
  /** Link to use for 'contact us' link */
  contactLink: types.ContactLink;
}

declare class Footer extends React.Component<FooterProps, {}> {}

export default Footer;

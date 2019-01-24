import React from 'react';
import T from 'prop-types';

import A from '../A';

const Branding = ({
  src, alt, to, href,
}) => (
  <div className={'branding'}>
    <div className={'header-organization-banner'}>
      <A to={to} href={href}>
        <img src={src} alt={alt} />
      </A>
    </div>
  </div>
);

Branding.propTypes = {
  /** Source of image */
  src: T.string.isRequired,
  /** Alt description of image */
  alt: T.string.isRequired,
  /** Internal link to navigate to */
  to: T.string,
  /** External link to navigate to */
  href: T.string,
};

Branding.defaultProps = {
  to: '',
  href: '',
};

export default Branding;

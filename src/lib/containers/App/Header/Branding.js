import React from 'react';
import T from 'prop-types';

import A from '../../../components/A';

const Branding = ({
  src, alt, to, href,
}) => {
  let defaultTo = to;
  // default to home if no links provided
  if (!href && !to) {
    defaultTo = '/';
  }

  return (
    <div className="branding">
      <div className="header-organization-banner">
        <A to={defaultTo} href={href}>
          <img src={src} alt={alt} />
        </A>
      </div>
    </div>
  );
};

Branding.propTypes = {
  src: T.string.isRequired,
  alt: T.string.isRequired,
  to: T.string,
  href: T.string,
};

Branding.defaultProps = {
  to: '',
  href: '',
};

export default Branding;

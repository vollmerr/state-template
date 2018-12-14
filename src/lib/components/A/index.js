import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Anchor tag that handles internal and external links
 * opens external links in a new window
 */
const A = (props) => {
  const {
    to,
    href,
    children,
    ...rest
  } = props;

  let aProps;
  let C = 'a';
  if (href) {
    // is external link
    aProps = {
      ...rest,
      href,
      target: '_blank',
    };
  } else {
    // is internal link
    aProps = {
      ...rest,
      to,
    };
    C = Link;
  }

  return <C {...aProps}>{children}</C>;
};

A.propTypes = {
  /** Path for internal links */
  to: T.string,
  /** Path for external links (open in new tab) */
  href: T.string,
  /** Content to display as a link */
  children: T.node.isRequired,
};

A.defaultProps = {
  to: '',
  href: '',
};

export default A;

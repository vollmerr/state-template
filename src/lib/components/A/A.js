import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Anchor tag that handles internal and external links.
 * Opens external links in a new window.
 */
const A = (props) => {
  const {
    to,
    href,
    text,
    children,
    ...rest
  } = props;

  let aProps;
  let Tag = 'a';
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
    Tag = Link;
  }

  return <Tag data-test={'link'} {...aProps}>{text || children}</Tag>;
};

A.propTypes = {
  /** Path for internal links */
  to: T.string,

  /** Path for external links (open in new tab) */
  href: T.string,

  /** Render content using shorthand */
  text: T.string,

  /** Render content */
  children: T.node,
};

A.defaultProps = {
  to: '',
  href: '',
  text: '',
  children: null,
};

export default A;

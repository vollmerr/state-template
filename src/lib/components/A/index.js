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

  return <Tag {...aProps}>{text}</Tag>;
};

A.propTypes = {
  /** Path for internal links */
  to: T.string,
  /** Path for external links (open in new tab) */
  href: T.string,
  /** Content to display as a link */
  text: T.string.isRequired,
};

A.defaultProps = {
  to: '',
  href: '',
};

export default A;

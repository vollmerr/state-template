import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

import Icon from '../Icon';

/**
 * Anchor tag that handles internal and external links.
 * Opens external links in a new window.
 */
const A = (props) => {
  const {
    children,
    href,
    iconProps,
    text,
    to,
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
      rel: 'noopener noreferrer',
    };
  } else {
    // is internal link
    aProps = {
      ...rest,
      to,
    };
    Tag = Link;
  }

  return (
    <Tag data-test={'link'} {...aProps}>
      {iconProps && <Icon {...iconProps} />}
      {text || children}
    </Tag>
  );
};

A.propTypes = {
  /** Render content */
  children: T.node,

  /** Path for external links (open in new tab) */
  href: T.string,

  /** Props for icon to render as content */
  iconProps: T.shape(Icon.propTypes),

  /** Render content using shorthand */
  text: T.string,

  /** Path for internal links */
  to: T.string,
};

A.defaultProps = {
  children: null,
  href: '',
  iconProps: null,
  text: '',
  to: '',
};

export default A;

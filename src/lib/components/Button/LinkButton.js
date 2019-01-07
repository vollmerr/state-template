import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '.';

/**
 * A `Button` specialized for links. Buttons with a `to`
 * are handled by react-router-dom's internal routing.
 * See [Button](#button) for full set of available props.
 */
const LinkButton = (props) => {
  const {
    to,
    href,
    ...rest
  } = props;

  let btnProps;
  if (href) {
    // is external link
    btnProps = {
      ...rest,
      href,
      target: '_blank',
      tag: 'a',
    };
  } else {
    // is internal link
    btnProps = {
      ...rest,
      to,
      tag: Link,
    };
  }

  // clear type to render as anchor (css issues..)
  btnProps.type = '';

  return <Button {...btnProps} />;
};

LinkButton.propTypes = {
  /** Path for internal links */
  to: T.string,
  /** Path for external links (open in new tab) */
  href: T.string,
};

LinkButton.defaultProps = {
  to: '',
  href: '',
};

export default LinkButton;

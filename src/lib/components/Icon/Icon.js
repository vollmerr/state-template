import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

/**
 * The `Icon` is used to render a state template icon,
 * automatically prefixing all icons with the correct class names.
 * See http://template.webstandards.ca.gov/sample/icon-fonts.html
 * for the full list of avaiable icon names.
 */
const Icon = (props) => {
  const {
    className,
    name,
    srOnly,
    tag: Tag,
    ...rest
  } = props;

  const cn = classNames([
    className,
    `ca-gov-icon-${name}`,
  ]);

  return (
    <>
      <Tag data-test={'icon'} className={cn} aria-hidden {...rest} />
      {srOnly && <span className={'sr-only'}>{srOnly}</span>}
    </>
  );
};

Icon.propTypes = {
  /** Class names to attach to the top level div */
  className: T.string,

  /** Name of icon to use (auto prefixes with ca-gov-icon-) */
  name: T.string.isRequired,

  /** Screen Reader only text */
  srOnly: T.string,

  /** HTML tag to render as  */
  tag: T.node,
};

Icon.defaultProps = {
  className: null,
  srOnly: '',
  tag: 'span',
};

export default Icon;

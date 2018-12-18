import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

/**
 * The `Icon` is used to display a state template icon,
 * automatically prefixing all icons with the correct class names.
 * See http://template.webstandards.ca.gov/sample/icon-fonts.html
 * for the full list of avaiable icon names.
 */
const Icon = (props) => {
  const {
    name,
    className,
    tag: Tag,
    ...rest
  } = props;

  const cn = classNames([
    className,
    `ca-gov-icon-${name}`,
  ]);

  return <Tag className={cn} {...rest} />;
};

Icon.propTypes = {
  /** Name of icon to use (auto prefixes with ca-gov-icon-) */
  name: T.string.isRequired,
  /** Class names to attach to the top level div */
  className: T.string,
  /** HTML tag to use  */
  tag: T.node,
};

Icon.defaultProps = {
  className: null,
  tag: 'span',
};

export default Icon;

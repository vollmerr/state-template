import React from 'react';
import T from 'prop-types';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';

/**
 * Tooltips rendered using [react-tooltip](https://github.com/wwayne/react-tooltip).
 * Refer to their documentation for additional properties, usability, and issues.
 */
const Tooltip = (props) => {
  const {
    children,
    className,
    id,
    text,
    ...rest
  } = props;

  const cn = classNames([
    'st-tooltip',
    className,
  ]);

  return (
    <ReactTooltip data-test={'tooltip'} className={cn} id={id} effect={'solid'} {...rest}>
      {text || children}
    </ReactTooltip>
  );
};

Tooltip.propTypes = {
  /** Content to render, mutually exlusive with text */
  children: T.node,

  /** Style class name to attach to button */
  className: T.string,

  /** ID of tooltip */
  id: T.string.isRequired,

  /** Content to render, mutually exlusive with children */
  text: T.oneOfType([
    T.string,
    T.node,
  ]),
};

Tooltip.defaultProps = {
  children: null,
  className: null,
  text: null,
};

export default Tooltip;

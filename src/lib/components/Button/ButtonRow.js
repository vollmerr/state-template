import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

// Renders buttons in a row with spacing between
const ButtonRow = ({ className, children, ...rest }) => {
  const cn = classNames([
    'btn-row',
    className,
  ]);

  return (
    <div data-test={'button-row'} className={cn} {...rest}>
      {children}
    </div>
  );
};

ButtonRow.propTypes = {
  /** Style class name to attach to button */
  className: T.string,

  /** Content to render */
  children: T.node.isRequired,
};

ButtonRow.defaultProps = {
  className: '',
};

export default ButtonRow;

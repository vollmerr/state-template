import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

// Renders buttons in a row with spacing between
const ButtonRow = ({ className, children, ...rest }) => {
  const cn = classNames([
    'btn-row',
    className,
  ]);

  return <div className={cn} data-test={'button-row'} {...rest}>{children}</div>;
};

ButtonRow.propTypes = {
  className: T.string,
  children: T.node.isRequired,
};

ButtonRow.defaultProps = {
  className: '',
};

export default ButtonRow;

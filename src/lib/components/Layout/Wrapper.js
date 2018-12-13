import React from 'react';
import classNames from 'classnames';
import T from 'prop-types';

const Wrapper = (props) => {
  const {
    baseClass,
    children,
    component: C,
    className,
    ...rest
  } = props;

  const cn = classNames([
    baseClass,
    className,
  ]);

  return (
    <div className={cn} {...rest}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  baseClass: T.string,
  children: T.element.isRequired,
  component: T.oneOfType([T.string, T.element]),
  className: T.string,
};

Wrapper.defaultProps = {
  baseClass: '',
  component: 'div',
  className: '',
};

export default Wrapper;

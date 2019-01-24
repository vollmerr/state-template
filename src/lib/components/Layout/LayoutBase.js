import React from 'react';
import classNames from 'classnames';
import T from 'prop-types';

const LayoutBase = (props) => {
  const {
    baseClass,
    children,
    tag: Tag,
    className,
    ...rest
  } = props;

  const cn = classNames([
    baseClass,
    className,
  ]);

  return (
    <Tag className={cn} {...rest}>
      {children}
    </Tag>
  );
};

LayoutBase.propTypes = {
  baseClass: T.string,
  children: T.node.isRequired,
  tag: T.oneOfType([T.string, T.element]),
  className: T.string,
};

LayoutBase.defaultProps = {
  baseClass: '',
  tag: 'div',
  className: '',
};

export default LayoutBase;

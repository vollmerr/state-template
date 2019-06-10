import React from 'react';
import classNames from 'classnames';
import T from 'prop-types';

const LayoutBase = (props) => {
  const {
    baseClass,
    children,
    className,
    tag: Tag,
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
  className: T.string,
  tag: T.node,
};

LayoutBase.defaultProps = {
  baseClass: '',
  className: '',
  tag: 'div',
};

export default LayoutBase;

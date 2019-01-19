import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';

const Panel = (props) => {
  const {
    title,
    buttonProps,
    children,
    variant,
    icon,
    className,
    ...rest
  } = props;

  const cn = classNames([
    'panel',
    `panel-${variant}`,
    className,
  ]);

  return (
    <div className={cn} {...rest} data-test={'panel'}>
      <div className="panel-heading">
        <h2>
          {icon && <span className={`${icon} m-r-sm`} />}
          {title}
        </h2>
        {
          buttonProps && (
            <div className="options">
              <Button {...buttonProps} />
            </div>
          )
        }
      </div>
      <div className="panel-body">
        {children}
      </div>
    </div>
  );
};

Panel.propTypes = {
  /** Title to display in panel heading */
  title: T.string.isRequired,
  /** Props to pass to Button in panel  heading */
  buttonProps: T.object,
  /** Content to render in panel body */
  children: T.node.isRequired,
  /** Style to apply */
  variant: T.oneOf(['default', 'primary', 'overstated', 'understated', 'standout']),
  /** Icon to display to left of title in panel heading */
  icon: T.string,
  /** Class names to attach to the top level div */
  className: T.string,
};

Panel.defaultProps = {
  buttonProps: null,
  variant: 'default',
  icon: null,
  className: null,
};

export default Panel;

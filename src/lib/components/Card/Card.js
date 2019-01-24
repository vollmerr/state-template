import React from 'react';
import classNames from 'classnames';
import T from 'prop-types';

import Icon from '../Icon';

const Card = (props) => {
  const {
    variant,
    header,
    footer,
    children,
    className,
    onDismiss,
    ...rest
  } = props;

  const cn = classNames([
    'card ',
    className,
    { [`card-${variant}`]: variant },
  ]);

  return (
    <div data-test={'card'} className={cn} {...rest}>
      {
        onDismiss
        && (
          <Icon
            name={'close-mark'}
            onClick={onDismiss}
            className={'dismiss-icon'}
            data-test={'button-dismiss'}
          />
        )
      }
      {header && <div className={'card-header'}>{header}</div>}
      <div className={'card-block'}>{children}</div>
      {footer && <div className={'card-footer'}>{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  /** Use style variant */
  variant: T.oneOf([
    'default',
    'understated',
    'overstated',
    'primary',
    'danger',
    'inverted',
  ]),
  /** Header to render */
  header: T.node,
  /** Footer to render */
  footer: T.node,
  /** Content to render */
  children: T.node,
  /** Style class name to attach to button */
  className: T.string,
};

Card.defaultProps = {
  variant: 'default',
  header: null,
  footer: null,
  children: null,
  className: '',
};

export default Card;

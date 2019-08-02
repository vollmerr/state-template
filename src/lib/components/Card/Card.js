import React from 'react';
import classNames from 'classnames';
import T from 'prop-types';

import Icon from '../Icon';

const Card = (props) => {
  const {
    children,
    className,
    footer,
    header,
    onDismiss,
    variant,
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
  /** Content to render */
  children: T.node,

  /** Style class name to attach */
  className: T.string,

  /** Footer to render */
  footer: T.node,

  /** Header to render */
  header: T.node,

  /** Action to clear the message */
  onDismiss: T.func,

  /** Use style variant */
  variant: T.oneOf([
    'default',
    'understated',
    'overstated',
    'standout',
    'primary',
    'danger',
    'inverted',
  ]),
};

Card.defaultProps = {
  children: null,
  className: '',
  footer: null,
  header: null,
  onDismiss: null,
  variant: 'default',
};

export default Card;

import React from 'react';

const Button = (props) => {
  const {
    primary,
    highlight,
    secondary,
    standout,
    text,
    type,
    className,
    ...btnProps
  } = props;

  let btnStyle = 'default';
  if (primary) {
    btnStyle = 'primary';
  } else if (highlight) {
    btnStyle = 'highlight';
  } else if (secondary) {
    btnStyle = 'secondary';
  } else if (standout) {
    btnStyle = 'standout';
  }

  const btnType = type || 'button';
  const btnClass = `btn btn-${btnStyle} ${className}`;

  // eslint-disable-next-line react/button-has-type
  return <button type={btnType} className={btnClass} {...btnProps}>{text}</button>;
};

export default Button;

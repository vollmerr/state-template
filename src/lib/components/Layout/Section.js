import React from 'react';
import classNames from 'classnames';
import T from 'prop-types';

import Wrapper from './Wrapper';

const Section = (props) => {
  const { variant, ...rest } = props;
  const baseClass = classNames([
    'section',
    { [`section-${variant}`]: variant },
  ]);

  return (
    <Wrapper baseClass={baseClass} {...rest} />
  );
};

Section.propTypes = {
  variant: T.oneOf([null, 'default', 'standout', 'understated']),
};

Section.defaultProps = {
  variant: null,
};

export default Section;

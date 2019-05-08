import React from 'react';
import T from 'prop-types';

import Icon from '../Icon';
import Tooltip from '../Tooltip';

const FieldLabel = (props) => {
  const {
    label,
    name,
    required,
    tooltip,
  } = props;

  if (!label) {
    return null;
  }

  const tooltipId = `${name}-tooltip`;

  return (
    <label data-test={'label'} className={'control-label'} htmlFor={name}>
      {required && (
        <span data-test={'required'} className={'required-label'} aria-hidden>* </span>
      )}

      {label}

      {tooltip && (
        <span className={'field__label-tooltip'} data-for={tooltipId} data-tip>
          <Icon name={'question-fill'} />
          <Tooltip id={tooltipId} text={tooltip} />
        </span>
      )}
    </label>
  );
};

FieldLabel.propTypes = {
  label: T.string,
  name: T.string.isRequired,
  required: T.bool,
  tooltip: T.oneOfType([
    T.string,
    T.node,
  ]),
};

FieldLabel.defaultProps = {
  label: null,
  required: false,
  tooltip: null,
};

export default FieldLabel;

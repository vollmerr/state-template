import React from 'react';
import T from 'prop-types';

import Icon from '../Icon';
import Tooltip from '../Tooltip';

/**
 * Label to render above field. Actual <label> element is inside the file picker,
 * used to interact with the input...
 */
const FieldFileLabel = (props) => {
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
    <div data-test={'label'} className={'field__file-label'}>
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
    </div>
  );
};

FieldFileLabel.propTypes = {
  label: T.string,
  name: T.string.isRequired,
  required: T.bool,
  tooltip: T.oneOfType([
    T.string,
    T.node,
  ]),
};

FieldFileLabel.defaultProps = {
  label: null,
  required: false,
  tooltip: null,
};

export default FieldFileLabel;

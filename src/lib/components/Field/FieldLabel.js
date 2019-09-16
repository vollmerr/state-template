import React from 'react';
import T from 'prop-types';

import Icon from '../Icon';
import Tooltip from '../Tooltip';

const FieldLabel = (props) => {
  const {
    label,
    name,
    required,
    tag: Tag,
    tooltip,
    ...rest
  } = props;

  if (!label) {
    return null;
  }

  const tooltipId = `${name}-tooltip`;

  return (
    <Tag data-test={'label'} className={'field__label control-label'} {...rest}>
      {required && <span data-test={'required'} className={'required-label'} aria-hidden>* </span>}

      {label}

      {tooltip && (
        <span className={'field__label-tooltip'} data-for={tooltipId} data-tip>
          <Icon name={'question-fill'} />
          <Tooltip id={tooltipId} text={tooltip} />
        </span>
      )}
    </Tag>
  );
};

FieldLabel.propTypes = {
  /** Label to render */
  label: T.string,

  /** Name of field */
  name: T.string.isRequired,

  /** Indicates the field is required */
  required: T.bool,

  /** HTML tag to render as */
  tag: T.node,

  /** Tooltip to display next to label */
  tooltip: T.oneOfType([
    T.string,
    T.node,
  ]),
};

FieldLabel.defaultProps = {
  label: null,
  required: false,
  tag: 'label',
  tooltip: null,
};

export default FieldLabel;

import React from 'react';

import FieldWrapper from './FieldWrapper';
import withField from './withField';

// group of radio buttons with optional help text and label
// displays error if validation fails
const FieldSelect = (props) => {
  const { input, options } = props;

  return (
    <FieldWrapper {...props}>
      <div>
        <label className="select">
          <select {...input}>
            <option disabled hidden style={{ display: 'none' }} value={''} />
            {
              options.filter(x => !x.hidden).map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))
            }
          </select>
        </label>
      </div>
    </FieldWrapper>
  );
};

export default withField(FieldSelect);

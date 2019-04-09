import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';
import { FieldCheckboxes } from './FieldCheckboxes';

const props = {
  'aria-describedby': 'aria-desc-id',
  'aria-invalid': 'false',
  className: 'test-classname',
  disabled: false,
  id: 'test-id',
  inline: false,
  label: 'test-label',
  name: 'test-name',
  onBlur: jest.fn(),
  onChange: jest.fn(),
  onFocus: jest.fn(),
  options: [
    { value: 'value-1', label: 'label-1' },
    { value: 'value-2', label: 'label-2' },
  ],
  value: 'value-1',
  variant: null,
};

let wrapper;
describe('FieldCheckboxes', () => {
  beforeEach(() => {
    wrapper = shallow(<FieldCheckboxes {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all the options as `Checkbox`s', () => {
    expect(wrapper.find(Checkbox).length).toBe(props.options.length);
  });

  it('should hide `hidden` options', () => {
    const options = [
      ...props.options,
      { value: 'value-3', label: 'label-3', hidden: true },
    ];
    wrapper.setProps({ options });
    expect(wrapper.find(Checkbox).length).toBe(props.options.length);
  });
});

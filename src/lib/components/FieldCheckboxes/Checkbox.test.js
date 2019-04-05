import React from 'react';
import { shallow } from 'enzyme';

import Checkbox, { handleChange } from './Checkbox';

const props = {
  name: 'test-name',
  value: 'value-1',
  option: {
    label: 'label-1',
    value: 'value-1',
  },
  variant: null,
  disabled: false,
  onChange: jest.fn(),
  'aria-invalid': 'false',
  'aria-describedby': 'aria-desc-id',
};

let wrapper;
describe('Checkbox', () => {
  beforeEach(() => {
    wrapper = shallow(<Checkbox {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should allow variants', () => {
    wrapper.setProps({ variant: 'primary' });
    const className = wrapper.find('span').prop('className');
    expect(className).toMatch(/bg-primary/);
  });

  it('should be `checked` for matching string values', () => {
    wrapper.setProps({ value: props.value });
    expect(wrapper.find('checked')).toBeTruthy();
  });

  it('should be `checked` for matching values in an array', () => {
    wrapper.setProps({ value: [props.value] });
    expect(wrapper.find('checked')).toBeTruthy();
  });

  let onChange;
  describe('handleChange', () => {
    beforeEach(() => {
      onChange = jest.fn();
    });

    it('should remove blank values from the start of the array', () => {
      const event = { target: { checked: false } };
      handleChange({ value: 'v1', values: ['', 'v 1'], onChange })(event);
      expect(onChange).toBeCalledWith([]);
    });

    it('should add a value to the end of the array if checked', () => {
      const event = { target: { checked: true } };
      handleChange({ value: 'v 1', values: [], onChange })(event);
      expect(onChange).toBeCalledWith(['v 1']);
    });

    it('should remove a value if not checked', () => {
      const event = { target: { checked: false } };
      handleChange({ value: 'v 2', values: ['v 1', 'v 2', 'v 3'], onChange })(event);
      expect(onChange).toBeCalledWith(['v 1', 'v 3']);
    });
  });
});

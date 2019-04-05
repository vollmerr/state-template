import React from 'react';
import { shallow } from 'enzyme';

import { FieldSelect } from './FieldSelect';

const props = {
  value: 'value-2',
  options: [
    { value: 'value-1', label: 'label-1' },
    { value: 'value-2', label: 'label-2' },
  ],
  multiple: false,
  disabled: false,
};

let wrapper;
describe('FieldSelect', () => {
  beforeEach(() => {
    wrapper = shallow(<FieldSelect {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all the options as `option`s', () => {
    expect(wrapper.find('option').length).toBe(props.options.length + 1); // plus 1 for empty option
  });

  it('should attach a multiple class if `multiple`', () => {
    wrapper.setProps({ multiple: true });
    expect(wrapper.find('.multiple').length).toBe(1);
  });

  it('should default empty values to an empty array if `multiple`', () => {
    wrapper.setProps({ value: '', multiple: true });
    expect(wrapper.find('select').prop('value')).toEqual([]);
  });

  it('should pass additional props to the `select`', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.find('select').prop('disabled')).toBe(true);
  });
});

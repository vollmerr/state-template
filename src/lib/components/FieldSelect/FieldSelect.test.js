import React from 'react';
import { shallow } from 'enzyme';

import { FieldSelect } from './FieldSelect';

const { testUtils } = global;

const props = {
  input: testUtils.getInputProp(),
  meta: testUtils.getMetaProp(),
  label: 'test label',
  options: [
    { value: 'v1', label: 'l1' },
    { value: 'v2', label: 'l2' },
  ],
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
    wrapper.setProps({ multiple: true, input: testUtils.getInputProp({ value: '' }) });
    expect(wrapper.find('select').prop('value')).toEqual([]);
  });
});

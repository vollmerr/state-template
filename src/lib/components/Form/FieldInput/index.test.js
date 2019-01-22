import React from 'react';
import { shallow } from 'enzyme';

import { FieldInput } from '.';

const { testUtils } = global;

const props = {
  input: testUtils.getInputProp(),
  meta: testUtils.getMetaProp(),
  label: 'test label',
  disabled: false,
};

let wrapper;
describe('FieldInput', () => {
  beforeEach(() => {
    wrapper = shallow(<FieldInput {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a `textarea` type', () => {
    wrapper.setProps({ tag: 'textarea' });
    expect(wrapper.find('textarea').length).toBe(1);
  });
});

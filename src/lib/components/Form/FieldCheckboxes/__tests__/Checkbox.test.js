import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from '../Checkbox';

const { testUtils } = global;

const props = {
  input: testUtils.getInputProp(),
  value: 'v1',
  label: 'test label',
  variant: null,
  disabled: false,
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
});

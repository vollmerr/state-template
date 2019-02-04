import React from 'react';
import { shallow } from 'enzyme';

import RadioButton from './RadioButton';

const { testUtils } = global;

const props = {
  input: testUtils.getInputProp(),
  label: 'test label',
  value: 'v1',
  disabled: false,
};

let wrapper;
describe('RadioButton', () => {
  beforeEach(() => {
    wrapper = shallow(<RadioButton {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as a button if passed a variant', () => {
    wrapper.setProps({ variant: 'highlight' });
    expect(wrapper.find('.btn').length).toBe(1);
  });

  it('should render inline', () => {
    wrapper.setProps({ inline: true });
    expect(wrapper.find('.form-check-inline').length).toBe(1);
  });
});

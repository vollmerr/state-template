import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from '../Checkbox';

const { testUtils } = global;

const props = {
  input: testUtils.getInputProp(),
  value,
  label,
  variant,
  disabled,
};

let wrapper;
describe('Checkbox', () => {
  beforeEach(() => {
    wrapper = shallow(<Checkbox {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should allow variants', () => {
  //   wrapper.setProps({ variant: 'secondary' });
  //   const className = wrapper.find('button').prop('className');
  //   expect(className).toMatch(/btn-secondary/);
  // });

  // it('should attach classNames', () => {
  //   wrapper.setProps({ className: 'textClass' });
  //   const className = wrapper.find('button').prop('className');
  //   expect(className).toMatch(/textClass/);
  // });

  // it('should allow different components', () => {
  //   wrapper.setProps({ component: 'a' });
  //   expect(wrapper.find('a').length).toBe(1);
  // });

  // it('should pass additional props', () => {
  //   wrapper.setProps({ id: 'testId', type: 'submit' });
  //   const button = wrapper.find('button');
  //   expect(button.prop('id')).toBe('testId');
  //   expect(button.prop('type')).toBe('submit');
  // });
});

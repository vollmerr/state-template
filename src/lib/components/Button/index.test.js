import React from 'react';
import { shallow } from 'enzyme';

import { Button as fromLib } from '../..';
import Icon from '../Icon';
import Button from '.';

const props = {};

let wrapper;
describe('Button', () => {
  beforeEach(() => {
    wrapper = shallow(<Button {...props}>children...</Button>);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(Button);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render shorthand `text`', () => {
    wrapper.setProps({ text: 'test text' });
    expect(wrapper.text()).toBe('test text');
  });

  it('should render an icon if passed `iconProps`', () => {
    const iconProps = { name: 'test' };
    wrapper.setProps({ iconProps });
    expect(wrapper.find(Icon).length).toBe(1);
  });

  it('should allow `variant`s', () => {
    wrapper.setProps({ variant: 'secondary' });
    const className = wrapper.find('button').prop('className');
    expect(className).toMatch(/btn-secondary/);
  });

  it('should attach `className`s', () => {
    wrapper.setProps({ className: 'textClass' });
    const className = wrapper.find('button').prop('className');
    expect(className).toMatch(/textClass/);
  });

  it('should allow different `tag`s', () => {
    wrapper.setProps({ tag: 'a' });
    expect(wrapper.find('a').length).toBe(1);
  });

  it('should pass additional props', () => {
    wrapper.setProps({ id: 'testId', type: 'submit' });
    const button = wrapper.find('button');
    expect(button.prop('id')).toBe('testId');
    expect(button.prop('type')).toBe('submit');
  });
});

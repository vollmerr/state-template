import React from 'react';
import { shallow } from 'enzyme';

import { Button as fromLib } from '../../..';
import Button from '..';

const props = {
  text: 'test text',
};

let wrapper;
describe('Button', () => {
  beforeEach(() => {
    wrapper = shallow(<Button {...props} />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(Button);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should allow variants', () => {
    wrapper.setProps({ variant: 'secondary' });
    const className = wrapper.find('button').prop('className');
    expect(className).toMatch(/btn-secondary/);
  });

  it('should attach classNames', () => {
    wrapper.setProps({ className: 'textClass' });
    const className = wrapper.find('button').prop('className');
    expect(className).toMatch(/textClass/);
  });

  it('should allow different components', () => {
    wrapper.setProps({ component: 'a' });
    expect(wrapper.find('a').length).toBe(1);
  });

  it('should pass additional props', () => {
    wrapper.setProps({ id: 'testId', type: 'submit' });
    const button = wrapper.find('button');
    expect(button.prop('id')).toBe('testId');
    expect(button.prop('type')).toBe('submit');
  });
});

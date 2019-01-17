import React from 'react';
import { shallow } from 'enzyme';

import { Icon as fromLib } from '../..';
import Icon from '.';

const props = {
  name: 'test text',
};

let wrapper;
describe('Icon', () => {
  beforeEach(() => {
    wrapper = shallow(<Icon {...props} />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(Icon);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should attach classNames', () => {
    wrapper.setProps({ className: 'textClass' });
    const className = wrapper.prop('className');
    expect(className).toMatch(/textClass/);
  });

  it('should allow different tags', () => {
    wrapper.setProps({ tag: 'a' });
    expect(wrapper.find('a').length).toBe(1);
  });

  it('should pass additional props', () => {
    wrapper.setProps({ id: 'testId' });
    expect(wrapper.prop('id')).toBe('testId');
  });
});

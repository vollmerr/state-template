import React from 'react';
import { shallow } from 'enzyme';

import { LayoutBase as fromLib } from '../..';
import LayoutBase from './LayoutBase';

const props = {
  baseClass: 'test-baseclass',
  children: 'test-children',
  className: 'test-class',
  tag: 'div',
};

let wrapper;
describe('LayoutBase', () => {
  beforeEach(() => {
    wrapper = shallow(<LayoutBase {...props} />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(LayoutBase);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should attach class names to the base class', () => {
    expect(wrapper.prop('className')).toMatch(props.baseClass);
    expect(wrapper.prop('className')).toMatch(props.className);
  });

  it('should pass additional props to the tag', () => {
    wrapper.setProps({ id: 'test-id' });
    expect(wrapper.find({ id: 'test-id' }).length).toBe(1);
  });

  it('should render as the html tag provided', () => {
    wrapper.setProps({ tag: 'span' });
    expect(wrapper.find('span').length).toBe(1);
  });
});

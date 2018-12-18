import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import { A as fromLib } from '../../..';
import A from '..';

const props = {
  href: 'http://www.google.com',
  text: 'link text',
};

let wrapper;
describe('A', () => {
  beforeEach(() => {
    wrapper = shallow(<A {...props} />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(A);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('external links', () => {
    it('should use an `a` tag', () => {
      const tag = wrapper.type();
      expect(tag).toBe('a');
    });

    it('should open in a new tab', () => {
      const target = wrapper.prop('target');
      expect(target).toBe('_blank');
    });
  });

  describe('internal links', () => {
    it('should use a `Link` tag', () => {
      wrapper.setProps({ to: '/testPath', href: undefined });
      const tag = wrapper.type();
      expect(tag).toBe(Link);
    });
  });

  it('should pass additional props', () => {
    wrapper.setProps({ id: 'testId', type: 'submit', variant: 'primary' });
    expect(wrapper.prop('id')).toBe('testId');
    expect(wrapper.prop('type')).toBe('submit');
    expect(wrapper.prop('variant')).toBe('primary');
  });
});

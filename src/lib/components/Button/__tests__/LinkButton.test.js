import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import { LinkButton as fromLib } from '../../..';
import LinkButton from '../LinkButton';
import Button from '..';

const props = {
  text: 'test text',
  href: 'http://www.google.com',
};

let wrapper;
describe('LinkButton', () => {
  beforeEach(() => {
    wrapper = shallow(<LinkButton {...props} />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(LinkButton);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('external links', () => {
    it('should use an `a` tag', () => {
      const component = wrapper.find(Button).prop('component');
      expect(component).toBe('a');
    });

    it('should open in a new tab', () => {
      const target = wrapper.find(Button).prop('target');
      expect(target).toBe('_blank');
    });
  });

  describe('internal links', () => {
    it('should use a `Link` tag', () => {
      wrapper.setProps({ to: '/testPath', href: undefined });
      const component = wrapper.find(Button).prop('component');
      expect(component).toBe(Link);
    });
  });

  it('should pass additional props', () => {
    wrapper.setProps({ id: 'testId', type: 'submit', variant: 'primary' });
    const button = wrapper.find(Button);
    expect(button.prop('id')).toBe('testId');
    expect(button.prop('type')).toBe('submit');
    expect(button.prop('variant')).toBe('primary');
  });
});

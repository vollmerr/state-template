import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../Button';
import { Panel as fromLib } from '../../..';
import Panel from '..';

const props = {
  title: 'test title',
  children: <p>panel content</p>,
};

let wrapper;
describe('Panel', () => {
  beforeEach(() => {
    wrapper = shallow(<Panel {...props} />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(Panel);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should allow variants', () => {
    wrapper.setProps({ variant: 'standout' });
    const className = wrapper.prop('className');
    expect(className).toMatch(/panel-standout/);
  });

  it('should attach classNames', () => {
    wrapper.setProps({ className: 'textClass' });
    const className = wrapper.prop('className');
    expect(className).toMatch(/textClass/);
  });

  it('should pass additional props', () => {
    wrapper.setProps({ id: 'testId' });
    expect(wrapper.prop('id')).toBe('testId');
  });

  it('should attach an icon to the header if provided one', () => {
    wrapper.setProps({ icon: 'test-icon' });
    const iconClass = wrapper.find('h2').find('span').prop('className');
    expect(iconClass).toMatch(/test-icon/);
  });

  it('should attach a button if provided props', () => {
    wrapper.setProps({ buttonProps: { text: 'test-button' } });
    const buttonText = wrapper.find(Button).prop('text');
    expect(buttonText).toBe('test-button');
  });
});

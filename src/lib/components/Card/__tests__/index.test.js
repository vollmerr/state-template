import React from 'react';
import { shallow } from 'enzyme';

import { Card as fromLib } from '../../..';
import Card from '..';

const TestHeader = () => <div>in header...</div>;
const TestChild = () => <div>test children...</div>;
const TestFooter = () => <div>in footer...</div>;

const props = {
  onDismiss: jest.fn(),
  header: <TestHeader />,
  children: <TestChild />,
  footer: <TestFooter />,
};

let wrapper;
describe('Card', () => {
  beforeEach(() => {
    wrapper = shallow(<Card {...props} />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(Card);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should allow variants', () => {
    wrapper.setProps({ variant: 'overstated' });
    expect(wrapper.prop('className')).toMatch(/card-overstated/);
  });

  it('should attach classNames', () => {
    wrapper.setProps({ className: 'testClass' });
    expect(wrapper.prop('className')).toMatch(/testClass/);
  });

  it('should pass additional props', () => {
    wrapper.setProps({ id: 'testId' });
    expect(wrapper.prop('id')).toBe('testId');
  });

  it('should call `onDismiss` when the close icon is clicked', () => {
    wrapper.find({ 'data-test': 'button-dismiss' }).simulate('click');
    expect(props.onDismiss).toBeCalled();
  });
});

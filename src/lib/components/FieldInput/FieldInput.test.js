import React from 'react';
import { shallow } from 'enzyme';

import { FieldInput } from './FieldInput';

const props = {
  name: 'test-name',
  label: 'test-label',
  onChange: jest.fn(),
};

let wrapper;
describe('FieldInput', () => {
  beforeEach(() => {
    wrapper = shallow(<FieldInput {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render custom `tag`s', () => {
    wrapper.setProps({ tag: 'textarea' });
    expect(wrapper.find('textarea').length).toBe(1);
  });

  it('should pass addtional props', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.prop('disabled')).toBe(true);
  });
});

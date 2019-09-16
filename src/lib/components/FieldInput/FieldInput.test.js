import React from 'react';
import { shallow } from 'enzyme';

import { FieldInput } from './FieldInput';

const props = {
  'aria-describedby': 'aria-desc-id',
  'aria-invalid': 'false',
  className: 'test-classname',
  disabled: false,
  id: 'test-id',
  label: 'test-label',
  name: 'test-name',
  onBlur: jest.fn(),
  onChange: jest.fn(),
  onFocus: jest.fn(),
  tag: 'input',
  value: 'test-value',
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
    expect(wrapper.find(props.tag).prop('disabled')).toBe(true);
  });
});

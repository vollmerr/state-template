import React from 'react';
import { shallow } from 'enzyme';

import RadioButton from './RadioButton';

const props = {
  'aria-describedby': 'aria-desc-id',
  'aria-invalid': 'false',
  disabled: false,
  inline: false,
  name: 'test-name',
  onBlur: jest.fn(),
  onChange: jest.fn(),
  onFocus: jest.fn(),
  option: {
    label: 'label-1',
    value: 'value-1',
    className: 'option-class',
  },
  value: 'value-1',
  variant: null,
};

let wrapper;
describe('RadioButton', () => {
  beforeEach(() => {
    wrapper = shallow(<RadioButton {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as a button if passed a variant', () => {
    wrapper.setProps({ variant: 'highlight' });
    expect(wrapper.find('.btn').length).toBe(1);
  });

  it('should render inline', () => {
    wrapper.setProps({ inline: true });
    expect(wrapper.find('.form-check-inline').length).toBe(1);
  });

  it('should pass the option`s value to the `onChange`', () => {
    wrapper.find('input').simulate('change');
    expect(props.onChange).toBeCalledWith(props.option.value);
  });
});

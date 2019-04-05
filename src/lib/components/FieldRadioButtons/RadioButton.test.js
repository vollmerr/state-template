import React from 'react';
import { shallow } from 'enzyme';

import RadioButton from './RadioButton';

const props = {
  name: 'test-name',
  value: 'value-1',
  option: {
    label: 'label-1',
    value: 'value-1',
  },
  inline: false,
  variant: null,
  disabled: false,
  onChange: jest.fn(),
  className: 'test-class',
  'aria-invalid': 'false',
  'aria-describedby': 'aria-desc-id',
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

import React from 'react';
import { shallow } from 'enzyme';

import RadioButton from './RadioButton';
import { FieldRadioButtons } from './FieldRadioButtons';

const props = {
  name: 'test-name',
  variant: null,
  options: [
    { value: 'value-1', label: 'label-1' },
    { value: 'value-2', label: 'label-2' },
  ],
  label: 'test-label',
  value: 'value-2',
  onChange: jest.fn(),
  disabled: false,
};

let wrapper;
describe('FieldRadioButtons', () => {
  beforeEach(() => {
    wrapper = shallow(<FieldRadioButtons {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all the options as `RadioButton`s', () => {
    expect(wrapper.find(RadioButton).length).toBe(props.options.length);
  });

  it('should hide `hidden` options', () => {
    const options = [
      ...props.options,
      { value: 'value-3', label: 'label-3', hidden: true },
    ];
    wrapper.setProps({ options });
    expect(wrapper.find(RadioButton).length).toBe(props.options.length);
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import RadioButton from './RadioButton';
import { FieldRadioButtons } from './FieldRadioButtons';

const { testUtils } = global;

const props = {
  input: testUtils.getInputProp(),
  meta: testUtils.getMetaProp(),
  label: 'test label',
  options: [
    { value: 'v1', label: 'l1' },
    { value: 'v2', label: 'l2' },
  ],
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
});

import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';
import { FieldCheckboxes } from '.';

const { testUtils } = global;

const props = {
  input: testUtils.getInputProp(),
  meta: testUtils.getMetaProp(),
  label: 'test label',
  variant: null,
  options: [
    { value: 'v1', label: 'l1' },
    { value: 'v2', label: 'l2' },
  ],
  disabled: false,
};

let wrapper;
describe('FieldCheckboxes', () => {
  beforeEach(() => {
    wrapper = shallow(<FieldCheckboxes {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all the options as `Checkbox`s', () => {
    expect(wrapper.find(Checkbox).length).toBe(props.options.length);
  });
});

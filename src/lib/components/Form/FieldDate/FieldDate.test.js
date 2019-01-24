import React from 'react';
import { shallow } from 'enzyme';

import DatePicker from './DatePicker';
import { FieldDate } from '.';

const { testUtils } = global;

const props = {
  input: testUtils.getInputProp(),
  meta: testUtils.getMetaProp(),
  label: 'test label',
  disabled: false,
  minDate: '1900-01-02',
};

let wrapper;
describe('FieldDate', () => {
  beforeEach(() => {
    wrapper = shallow(<FieldDate {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a `DatePicker`', () => {
    expect(wrapper.find(DatePicker).length).toBe(1);
  });
});

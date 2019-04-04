import React from 'react';
import { shallow } from 'enzyme';

import { FieldDate } from './FieldDate';

const { testUtils } = global;

const props = {
  input: testUtils.getInputProp(),
  meta: testUtils.getMetaProp(),
  label: 'test label',
  minDate: '1900-01-02',
  disabled: false,
};

let wrapper;
let instance;
describe('FieldDate', () => {
  beforeEach(() => {
    wrapper = shallow(<FieldDate {...props} />);
    instance = wrapper.instance();
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should format and update the displayed date when a new value is recieved', () => {
    const input = { ...props.input, value: new Date('2011-09-01T08:00:00.000Z') };
    instance.componentWillReceiveProps({ ...props, input });
    expect(wrapper.state('displayText')).toBe('2011-09-01');
  });

  it('should hide the calender icon when disabled', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.find(Icon).length).toBe(0);
  });

  it('should handle invalid dates', () => {
    const date = instance.getDate('invalid date');
    expect(date).toBe('');
  });
});

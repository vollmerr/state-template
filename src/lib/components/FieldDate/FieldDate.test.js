import React from 'react';
import { shallow } from 'enzyme';

import { FieldDate } from './FieldDate';

const props = {
  'aria-describedby': 'aria-desc-id',
  'aria-invalid': 'false',
  className: 'test-classname',
  disabled: false,
  id: 'test-id',
  label: 'test-label',
  minDate: '1900-01-02',
  name: 'test-name',
  onChange: jest.fn(),
  value: '2020-05-03',
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
    instance.componentWillReceiveProps({ ...props, value: new Date('2011-09-01T08:00:00.000Z') });
    expect(wrapper.state('displayText')).toBe('2011-09-01');
  });

  it('should hide the calender icon when disabled', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.find('[data-test="field__date-icon"]').length).toBe(0);
  });

  it('should handle invalid dates', () => {
    const pickerDate = instance.getPickerDate('invalid date');
    const displayDate = instance.getDisplayDate('invalid date');
    expect(pickerDate).toBe('');
    expect(displayDate).toBe('');
  });
});

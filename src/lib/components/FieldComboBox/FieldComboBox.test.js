import React from 'react';
import { shallow } from 'enzyme';

import { FieldComboBox } from './FieldComboBox';

const props = {
  'aria-describedby': 'aria-desc-id',
  'aria-invalid': 'false',
  className: 'test-classname',
  disabled: false,
  id: 'test-id',
  inputRef: null,
  label: 'test-label',
  name: 'test-name',
  onChange: jest.fn(),
  onHide: jest.fn(),
  onShow: jest.fn(),
  options: [
    { value: 'value-1', label: 'label-1' },
    { value: 'value-2', label: 'label-2' },
  ],
  value: 'value-1',
};

let wrapper;
describe('FieldComboBox', () => {
  beforeEach(() => {
    wrapper = shallow(<FieldComboBox {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

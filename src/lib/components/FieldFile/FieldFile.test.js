import React from 'react';
import { shallow } from 'enzyme';

import { FieldFile } from './FieldFile';

const props = {
  accept: '.jpg, .jpeg, .png',
  'aria-describedby': 'aria-desc-id',
  'aria-invalid': 'false',
  btnText: 'upload-button-text',
  className: 'test-classname',
  disabled: false,
  id: 'test-id',
  label: 'test-label',
  multiple: false,
  name: 'test-name',
  onBlur: jest.fn(),
  onChange: jest.fn(),
  onFocus: jest.fn(),
  placeholder: 'test-placeholder',
  value: 'test-value',
};

let wrapper;
describe('FieldFile', () => {
  beforeEach(() => {
    wrapper = shallow(<FieldFile {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

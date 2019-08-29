import React from 'react';
import { shallow } from 'enzyme';

import { Form as fromLib } from '../..';
import defaultExport, { Form } from './Form';

const props = {
  handleSubmit: jest.fn(),
  onSubmit: jest.fn(),
  children: <div>children...</div>,
};

let wrapper;
describe('Form', () => {
  beforeEach(() => {
    wrapper = shallow(<Form {...props} />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(defaultExport);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the `onSubmit` using redux-form`s `handleSubmit` when submitting', () => {
    wrapper.find('form').simulate('submit');
    expect(props.handleSubmit).toBeCalledWith(props.onSubmit);
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import { Async as fromLib } from '../..';
import Async from '.';

const props = {
  error: 'test-error',
  onDismiss: jest.fn(),
  btnProps: { onClick: jest.fn(), text: 'test-button' },
  isLoading: false,
  delay: 1000,
};

let wrapper;
describe('Async', () => {
  beforeEach(() => {
    wrapper = shallow(<Async {...props}>children...</Async>);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(Async);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

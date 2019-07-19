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

  it('should have a `error` status if has an error', () => {
    expect(wrapper.find('[data-status="error"]').length).toBe(1);
  });

  it('should have a `loading` status if loading witout an error', () => {
    wrapper.setProps({ error: null, isLoading: true });
    expect(wrapper.find('[data-status="loading"]').length).toBe(1);
  });

  it('should have a `loaded` status if neither loading nor an error', () => {
    wrapper.setProps({ error: null });
    expect(wrapper.find('[data-status="loaded"]').length).toBe(1);
  });
});

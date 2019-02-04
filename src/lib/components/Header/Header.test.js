import React from 'react';
import { shallow } from 'enzyme';

import { Header as fromLib } from '../..';
import Header from './Header';

let wrapper;
describe('Header', () => {
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(Header);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

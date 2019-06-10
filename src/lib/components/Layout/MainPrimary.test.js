import React from 'react';
import { shallow } from 'enzyme';

import { MainPrimary as fromLib } from '../..';
import MainPrimary from './MainPrimary';

const props = {
  children: 'test-children',
  className: 'test-class',
};

let wrapper;
describe('MainPrimary', () => {
  beforeEach(() => {
    wrapper = shallow(<MainPrimary {...props} />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(MainPrimary);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import { MainContent as fromLib } from '../..';
import MainContent from './MainContent';

const props = {
  children: 'test-children',
  className: 'test-class',
};

let wrapper;
describe('MainContent', () => {
  beforeEach(() => {
    wrapper = shallow(<MainContent {...props} />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(MainContent);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

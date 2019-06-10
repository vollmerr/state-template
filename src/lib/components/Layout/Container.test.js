import React from 'react';
import { shallow } from 'enzyme';

import { Container as fromLib } from '../..';
import Container from './Container';

const props = {
  children: 'test-children',
  className: 'test-class',
};

let wrapper;
describe('Container', () => {
  beforeEach(() => {
    wrapper = shallow(<Container {...props} />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(Container);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

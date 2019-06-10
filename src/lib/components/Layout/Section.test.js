import React from 'react';
import { shallow } from 'enzyme';

import { Section as fromLib } from '../..';
import Section from './Section';

const props = {
  variant: 'standout',
  className: 'test-class',
};

let wrapper;
describe('Section', () => {
  beforeEach(() => {
    wrapper = shallow(<Section {...props} />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(Section);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should use the variant in the base class', () => {
    expect(wrapper.prop('baseClass')).toMatch(`section-${props.variant}`);
  });
});

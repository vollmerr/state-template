import React from 'react';
import { shallow } from 'enzyme';

import { Footer as fromLib } from '../..';
import Footer from './Footer';

const props = {
  contactLink: {
    href: 'http://www.google.com',
    text: 'link text',
  },
};

let wrapper;
describe('Footer', () => {
  beforeEach(() => {
    wrapper = shallow(<Footer {...props} />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(Footer);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

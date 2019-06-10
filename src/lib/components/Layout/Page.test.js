import React from 'react';
import { shallow } from 'enzyme';

import { Page as fromLib } from '../..';
import { BannerPrimary } from '../Banner';
import Page from './Page';

const props = {
  bannerSrc: 'test-banner-src',
  children: 'test-children',
  className: 'test-class',
  title: 'test-title',
};

let wrapper;
describe('Page', () => {
  beforeEach(() => {
    wrapper = shallow(<Page {...props} />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(Page);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render a banner if `bannerSrc` is not provided', () => {
    wrapper.setProps({ bannerSrc: null });
    expect(wrapper.find(BannerPrimary).length).toBe(0);
  });

  it('should not render a title if `title` is not provided', () => {
    wrapper.setProps({ title: null });
    expect(wrapper.find('h1').length).toBe(0);
  });
});

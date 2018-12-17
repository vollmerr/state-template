import React from 'react';
import { shallow } from 'enzyme';

import { BannerPrimary as fromLib } from '../../..';
import BannerPrimary from '../BannerPrimary';

const props = {
  src: 'imgSrc.png',
};

let wrapper;
describe('BannerPrimary', () => {
  beforeEach(() => {
    wrapper = shallow(<BannerPrimary {...props} />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(BannerPrimary);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

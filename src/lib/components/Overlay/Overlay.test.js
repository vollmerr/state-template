import React from 'react';
import { shallow } from 'enzyme';

import { Overlay as fromLib } from '../..';
import Overlay from '.';

const props = {
  show: true,
  onClick: jest.fn(),
};

let wrapper;
describe('Overlay', () => {
  beforeEach(() => {
    wrapper = shallow(<Overlay {...props} />);
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(Overlay);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render if no `show`', () => {
    wrapper.setProps({ show: false });
    expect(wrapper.isEmptyRender()).toBeTruthy();
  });
});

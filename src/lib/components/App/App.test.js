import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

const props = {
  history: { push: jest.fn() },
};

let wrapper;
let instance;
describe('App', () => {
  beforeEach(() => {
    wrapper = shallow(<App {...props} />);
    instance = wrapper.instance();
  });

  describe('onScroll', () => {
    it('should do nothing if scrolled up and return top is not visible', () => {
      window.scrollY = 0;
      instance.onScroll();
      expect(wrapper.state('returnTopVisible')).toBeFalsy();
    });

    it('should set return top as visible if scrolled up and return top is visible', () => {
      window.scrollY = 0;
      wrapper.setState({ returnTopVisible: true });
      instance.onScroll();
      expect(wrapper.state('returnTopVisible')).toBeFalsy();
    });

    it('should set return top as visible if scrolled down and return top is not visible', () => {
      window.scrollY = 99999;
      instance.onScroll();
      expect(wrapper.state('returnTopVisible')).toBeTruthy();
    });

    it('should do nothing if scrolled down and return top is visible', () => {
      window.scrollY = 99999;
      wrapper.setState({ returnTopVisible: true });
      instance.onScroll();
      expect(wrapper.state('returnTopVisible')).toBeTruthy();
    });
  });

  describe('renderReturnTop', () => {
    it('should render a component', () => {
      const ReturnTop = shallow(instance.renderReturnTop());
      expect(ReturnTop.children.length).not.toBe(0);
    });

    it('should attach the `is-visible` class if visible', () => {
      wrapper.setState({ returnTopVisible: true });
      const ReturnTop = shallow(instance.renderReturnTop());
      expect(ReturnTop.prop('className')).toMatch(/is-visible/);
    });

    it('should call `onClickReturnTop` when clicked', () => {
      instance.onClickReturnTop = jest.fn();
      const ReturnTop = shallow(instance.renderReturnTop());
      ReturnTop.prop('onClick')();
      expect(instance.onClickReturnTop).toBeCalled();
    });
  });

  describe('renderHeader', () => {
    it('should render the custom routing if `renderHeader` passed', () => {
      const renderHeader = () => <header>custom header</header>;
      wrapper.setProps({ renderHeader });
      const isSame = shallow(instance.renderHeader()).equals(renderHeader());
      expect(isSame).toBeTruthy();
    });
  });

  describe('renderRouting', () => {
    it('should render the custom routing if `renderRouting` passed', () => {
      const renderRouting = () => <div>custom routing</div>;
      wrapper.setProps({ renderRouting });
      const isSame = shallow(instance.renderRouting()).equals(renderRouting());
      expect(isSame).toBeTruthy();
    });
  });

  describe('renderFooter', () => {
    it('should render the custom footer if `renderFooter` passed', () => {
      const renderFooter = () => <footer>custom footer</footer>;
      wrapper.setProps({ renderFooter });
      const isSame = shallow(instance.renderFooter()).equals(renderFooter());
      expect(isSame).toBeTruthy();
    });
  });

  describe('render', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should allow a custom router to be used that is passed the history', () => {
      const CustomRouter = () => <div>in custom routing...</div>;
      wrapper.setProps({ router: CustomRouter });
      expect(wrapper.find(CustomRouter).length).toBe(1);
      expect(wrapper.find(CustomRouter).prop('history')).toBe(props.history);
    });
  });
});

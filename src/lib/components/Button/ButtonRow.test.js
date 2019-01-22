import React from 'react';
import { shallow } from 'enzyme';

import { ButtonRow as fromLib } from '../..';
import ButtonRow from './ButtonRow';
import Button from '.';

const props = {};
const Button1 = () => <Button variant={'default'} />;
const Button2 = () => <Button variant={'primary'} />;

let wrapper;
describe('ButtonRow', () => {
  beforeEach(() => {
    wrapper = shallow((
      <ButtonRow {...props}>
        <Button1 />
        <Button2 />
      </ButtonRow>
    ));
  });

  it('should be exported as part of the library', () => {
    expect(fromLib).toEqual(ButtonRow);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should attach classNames', () => {
    wrapper.setProps({ className: 'textClass' });
    const className = wrapper.prop('className');
    expect(className).toMatch(/textClass/);
  });

  it('should pass additional props', () => {
    wrapper.setProps({ id: 'testId', type: 'submit' });
    expect(wrapper.prop('id')).toBe('testId');
  });
});

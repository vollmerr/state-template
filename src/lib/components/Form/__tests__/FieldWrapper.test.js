import React from 'react';
import { shallow } from 'enzyme';

import FieldWrapper from '../FieldWrapper';

const Child = () => <input name={'test input'} />;
const props = {
  label: 'test label',
  meta: { touched: true, error: 'test error' },
  helpText: 'test help text',
  required: true,
  children: <Child />,
};

let wrapper;
describe('FieldWrapper', () => {
  beforeEach(() => {
    wrapper = shallow(<FieldWrapper {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should attach the `className` to the top level container', () => {
    wrapper.setProps({ className: 'test-class' });
    expect(wrapper.prop('className')).toMatch(/test-class/);
  });

  it('should not render a label if none provided', () => {
    wrapper.setProps({ label: '' });
    expect(wrapper.find('[data-test="label"]').length).toEqual(0);
  });

  it('should not render a required indicator if not `required`', () => {
    wrapper.setProps({ required: false });
    expect(wrapper.find('[data-test="required"]').length).toEqual(0);
  });

  it('should not render a error message if not touched or no error', () => {
    wrapper.setProps({ meta: { touched: false, error: 'test error' } });
    expect(wrapper.prop('className')).not.toMatch(/has-error/);
    expect(wrapper.find('[data-test="error"]').length).toEqual(0);
  });

  it('should not render a help text block if no `helpText`', () => {
    wrapper.setProps({ helpText: '' });
    expect(wrapper.find('[data-test="help"]').length).toEqual(0);
  });
});

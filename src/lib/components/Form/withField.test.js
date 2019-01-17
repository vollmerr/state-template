import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';

import withField from './withField';

const { testUtils } = global;

const emptyValidator = jest.fn();
const component = 'input';
const withHOC = withField(emptyValidator);
const Input = withHOC(component);

const props = {
  input: testUtils.getInputProp(),
  meta: testUtils.getMetaProp(),
  label: 'test label',
  disabled: false,
  required: true,
  validate: [jest.fn],
};

let wrapper;
describe('withField', () => {
  beforeEach(() => {
    wrapper = shallow(<Input {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass the `component` to a redux-form `Field`', () => {
    const ReduxFormField = wrapper.find(Field);
    expect(ReduxFormField.length).toBe(1);
    expect(ReduxFormField.prop('component')).toEqual(component);
  });

  it('should add a empty validation if `required`', () => {
    const validation = wrapper.prop('validate').pop();
    expect(validation).toEqual(emptyValidator);
  });

  it('should ignore all validation if `disabled`', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.prop('validate')).toBeFalsy();
  });

  it('should not add empty validation if not required', () => {
    wrapper.setProps({ required: false });
    const validations = wrapper.prop('validate');
    expect(validations.every(x => x !== emptyValidator)).toBeTruthy();
  });
});

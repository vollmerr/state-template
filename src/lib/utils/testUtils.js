export const getInputProp = ({
  value = 'test value',
  name = 'testName',
  onChange = jest.fn(),
  ...rest
} = {}) => ({
  value,
  name,
  onChange,
  ...rest,
});

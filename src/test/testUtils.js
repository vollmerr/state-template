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

export const getMetaProp = ({
  touched = false,
  error = null,
} = {}) => ({
  touched,
  error,
});

export const eventMap = () => {
  const events = {};

  window.addEventListener = jest.fn((event, fn) => {
    events[event] = fn;
  });

  window.removeEventListener = jest.fn((event, fn) => {
    if (fn === events[event]) {
      events[event] = undefined;
    }
  });

  return events;
};

export const wait = ms => new Promise(r => setTimeout(r, ms));

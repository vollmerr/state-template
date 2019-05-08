import * as actions from './actions';
import withAsync from './withAsync';

jest.mock('redux-saga/effects');
jest.mock('./actions');

const action = {
  payload: 123,
};

const mockFunc = jest.fn();

function* mockSaga(payload) {
  yield mockFunc(payload);
}

const runSaga = (saga) => {
  for (let _ of saga) {} // eslint-disable-line
};

describe('withAsync', () => {
  it('should return a saga function', () => {
    expect(typeof withAsync(mockSaga)).toBe('function');
  });

  it('should update the loading value', () => {
    const saga = withAsync(mockSaga)(action);
    runSaga(saga);
    expect(actions.increaseLoading).toBeCalled();
    expect(actions.decreaseLoading).toBeCalled();
  });

  it('should run the passed saga with the payload', () => {
    const saga = withAsync(mockSaga)(action);
    runSaga(saga);
    expect(mockFunc).toBeCalledWith(action.payload);
  });

  it('should handle errors', () => {
    const error = new Error('test errorz!');
    const errorSaga = () => { throw error; };
    const saga = withAsync(errorSaga)(action);
    runSaga(saga);
    expect(actions.setError).toBeCalledWith(error);
  });
});

import React from 'react';
import T from 'prop-types';
import { Provider } from 'react-redux';

import { configureStore } from '../lib';

const ExampleRedux = ({ children, store, ...rest }) => {
  const initialState = { global: { ...store } };
  const newStore = configureStore({ initialState });

  return (
    <Provider store={newStore} {...rest}>
      {children}
    </Provider>
  );
};

ExampleRedux.propTypes = {
  children: T.node.isRequired,
  store: T.object.isRequired,
};

export default ExampleRedux;

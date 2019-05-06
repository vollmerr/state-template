import React from 'react';
import T from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { configureStore } from '../lib';
import '../lib/style/core/css/colorscheme-oceanside.min.css';

const initialState = {};
const store = configureStore({ initialState });

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <MemoryRouter>
      {children}
    </MemoryRouter>
  </Provider>
);

Wrapper.propTypes = {
  children: T.node.isRequired,
};

export default Wrapper;

### configureStore

Use the `configureStore` utility to register any reducers, sagas (redux-saga), and middlewares.

This utility registers `redux-saga` as a middleware, `redux-form` as a reduxer, and any other state template reducers, as well as redux dev tools.

Not using this method will allow not requring the use of `redux-saga` and `redux-form`.

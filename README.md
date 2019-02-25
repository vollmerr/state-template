# state-template

[![npm version](https://img.shields.io/npm/v/state-template.svg?style=flat)](https://www.npmjs.com/package/react)

CA State Template styled react components.

## Testing
There are several types of tests in this project as follows:

### Unit Tests
Unit tests use [Jest](https://jestjs.io/) with [Enzyme](https://github.com/airbnb/enzyme).

Use `npm run test` for a single run of unit tests with a code coverage report generated.

Use `npm run test:watch` for a continuous runs of unit tests, updated upon saving a file. Snapshots can be updated by pressin `u` while these types of tests are being ran.

### Visual Regression Tests
Visual Regression tests use [backstop.js](https://github.com/garris/BackstopJS) to capture screenshots and compare against previous screenshots. Configure running backstop in the `backstop.json` config file.

These tests require the styleguidist documentation to be running. Before any visual regression test start the docs using `npm run docs`.

Use `npm run visual` to run visual regression tests. A html page will open with the results. There can sometimes be inconsistencies, such as if you run have debugWindow turned on (to view the results as they process) the screenshot may capture different.

Use `npm run visual:update` to udpate the reference snapshots. These snapshots are stored in backstop_data/bitmaps_reference.

## Caveats
This project currently contains dependencies upon several libraries for certain funcitonality, this is subject to change in future releases (they will most likely just get pulled out into a sperate project). These dependencies are as follows:

- form fields require `redux-form` as their managment system. They will not work outside redux-form without a lot of effort.
- the `createStore` util currently requires `redux`, `redux-saga`, and `redux-form`. It handles initializing them with any passed in reducers and sagas.

# state-template
[CA State Template](https://webstandards.ca.gov/state-template-v5/) styled react components.

[![npm version](https://img.shields.io/npm/v/state-template.svg?style=flat)](https://www.npmjs.com/package/react)

- [state-template](#state-template)
  - [Usage](#usage)
    - [Installation](#installation)
    - [Project Setup](#project-setup)
  - [Docs](#docs)
  - [Testing](#testing)
    - [Unit Tests](#unit-tests)
    - [Visual Regression Tests](#visual-regression-tests)
  - [Caveats](#caveats)

## Usage
### Installation
Use `npm install --save state-template` to install this library as a npm package. 

Components can then be imported using es6 syntax, such as

```jsx
import { ButtonRow, Button } from 'state-template';
```

### Project Setup
To get started using this package clone the starter kit:

```
git clone https://odibpas.visualstudio.com/React-StateTemplate-StarterKit/_git/React-StateTemplate-StarterKit
```

## Docs
The best way to try components and discover what is provided in this package is to run the documentation.

Use `npm run docs` and navigate to `http://localhost:6060/` to view the documentation.

Every exmaple provides an editable example of code for trying the feature out.

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

- form fields require `redux-form` as their managment system and are not designed for use outside of it.
- the `configureStore` util currently requires `redux`, `redux-saga`, and `redux-form`. It handles initializing them with any passed in reducers and sagas. This functionality is required for any redux connected component, such as ConnectedAsync, and form fields.

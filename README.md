***THIS PROJECT HAS MOVED TO https://odibpas.visualstudio.com/React%20State%20Template/_git/React%20State%20Template***

# state-template
[CA State Template](https://webstandards.ca.gov/state-template-v5/) (v5.0.10) styled react components. See the docs at [https://vollmerr.github.io/state-template](https://vollmerr.github.io/state-template).

[![npm version](https://img.shields.io/npm/v/state-template.svg?style=flat)](https://www.npmjs.com/package/state-template)

- [state-template](#state-template)
  - [Usage](#Usage)
    - [Installation](#Installation)
    - [Project Setup](#Project-Setup)
    - [Styling](#Styling)
  - [Docs](#Docs)
    - [Deploying Docs](#Deploying-Docs)
  - [Testing](#Testing)
    - [Unit Tests](#Unit-Tests)
    - [Visual Regression Tests](#Visual-Regression-Tests)
  - [Caveats](#Caveats)

## Usage
### Installation
Use `npm install --save state-template` to install this library as a npm package. 

Components can then be imported using es6 syntax, such as

```jsx
import { ButtonRow, Button } from 'state-template';
```

### Project Setup
To get started using this package clone the [state-template-starter](https://github.com/vollmerr/state-template-starter):

```
git clone https://github.com/vollmerr/state-template-starter
```

### Styling
This project does not include the state template styling by default, it can be added by adding the following lines in the projects entry file, where 'oceanside' can be the name of the colorscheme to use:

```
import 'state-template/dist/style/core/css/cagov.core.min.css';
import 'state-template/dist/style/core/css/colorscheme-oceanside.min.css';
```

This project is currently only tested and maintained for the oceanside colorscheme. There are long term plans to allow other themes, but currently not all colors are applied correctly for other themes.

## Docs
The best way to try components and discover what is provided in this package is to run the documentation, or view it at [https://vollmerr.github.io/state-template](https://vollmerr.github.io/state-template).

Use `npm run docs` and navigate to `http://localhost:6060/` to view the documentation locally.

Every example provides an editable snippet of code for trying the feature out.

### Deploying Docs

Use `npm run deploy` to build and deploy the docs to [https://vollmerr.github.io/state-template](https://vollmerr.github.io/state-template).

## Testing
There are several types of tests in this project as follows:

### Unit Tests
Unit tests use [Jest](https://jestjs.io/) with [Enzyme](https://github.com/airbnb/enzyme).

Use `npm run test` for a single run of unit tests with a code coverage report generated.

Use `npm run test:watch` for a continuous runs of unit tests, updated upon saving a file. Snapshots can be updated by pressing `u` while these types of tests are being ran.

### Visual Regression Tests
Visual Regression tests use [backstop.js](https://github.com/garris/BackstopJS) to capture screenshots and compare against previous screenshots. Configure running backstop in the `backstop.json` config file.

These tests require the styleguidist documentation to be running. Before any visual regression test start the docs using `npm run docs`.

Use `npm run visual` to run visual regression tests. A html page will open with the results. There can sometimes be inconsistencies, such as if you run have debugWindow turned on (to view the results as they process) the screenshot may capture different, as well as components that use animations or some other time oriented feature.

Use `npm run visual:update` to udpate the reference snapshots. These snapshots are stored in backstop_data/bitmaps_reference.

## Caveats
This project currently contains dependencies upon several libraries for certain functionality, this is subject to change in future releases (they will most likely just get pulled out into a sperate project). These dependencies are as follows:

- form fields require `redux-form` as their managment system and are not designed for use outside of it.
- the `configureStore` util currently requires `redux`, `redux-saga`, and `redux-form`. It handles initializing them with any passed in reducers and sagas. This functionality is required for any redux connected component, such as ConnectedAsync, and form fields.

This project also is currently only tested and maintained for the oceanside colorscheme. There are long term plans to allow other themes, but currently not all colors are applied correctly for other themes.

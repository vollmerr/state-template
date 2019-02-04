# state-template

## Testing
There are several types of tests in this project as follows:

### Visual Regression Tests
Visual Regression tests use [backstop.js](https://github.com/garris/BackstopJS) to capture screenshots and compare against previous screenshots. Configure running backstop in the `backstop.json` config file.

These tests require the styleguidist documentation to be running. Before any visual regression test start the docs using `npm run docs`.

Use `npm run visual` to run visual regression tests. A html page will open with the results. There can sometimes be inconsistencies, such as if you run have debugWindow turned on (to view the results as they process) the screenshot may capture different.

Use `npm run visual:update` to udpate the reference snapshots. These snapshots are stored in backstop_data/bitmaps_reference.

## Caveats
This project currently contains dependencies upon several libraries for certain funcitonality, this is subject to change in future releases (they will most liekly just get pulled out into a sperate project).

The following table describes components/utils that rely on subject to change libraries:

name | packages
---|---
Form fields | redux-form
Async | redux, redux-saga, redux-actions, reselect
Messages | redux, redux-saga, redux-actions, reselect
configureStore util | redux-form, redux-saga, Messages packages

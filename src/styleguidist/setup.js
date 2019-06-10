// see https://react-styleguidist.js.org/docs/cookbook.html#how-to-hide-some-components-in-style-guide-but-make-them-available-in-examples
import ExampleForm from './ExampleForm';
import ExampleRedux from './ExampleRedux';

import goldenGate from './images/goldenGate.jpg';

global.ExampleForm = ExampleForm;
global.ExampleRedux = ExampleRedux;
global.goldenGate = goldenGate;

process.env.REACT_APP_VERSION = '0.0.1';

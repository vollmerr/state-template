/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MockDate from 'mockdate';

import * as testUtils from './testUtils';

jest.mock('lodash.debounce');

// configure react v16 for enzzyme testing
configure({ adapter: new Adapter() });
// hard code dates (snapshots...)
MockDate.set('1/1/2000');

// attach to global for easier access in tests
global.testUtils = testUtils;

process.env.REACT_APP_VERSION = '0.0.1';

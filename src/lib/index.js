// ////////////////////////////////////// components
// a
import A from './components/A';
// banner
import BannerPrimary from './components/Banner/BannerPrimary';
// button
import Button from './components/Button';
import LinkButton from './components/Button/LinkButton';
// form
import FieldCheckboxes from './components/Form/FieldCheckboxes';
import FieldDate from './components/Form/FieldDate';
import FieldInput from './components/Form/FieldInput';
import FieldRadioButtons from './components/Form/FieldRadioButtons';
import FieldSelect from './components/Form/FieldSelect';
import FieldTime from './components/Form/FieldTime';
// icon
import Icon from './components/Icon';
// layout
import Container from './components/Layout/Container';
import MainContent from './components/Layout/MainContent';
import MainPrimary from './components/Layout/MainPrimary';
import Section from './components/Layout/Section';
// overlay
import Overlay from './components/Overlay';
import Panel from './components/Panel';
import Table from './components/Table';

// ////////////////////////////////////// containers
// app
import App from './containers/App';
import * as appActions from './containers/App/actions';
import * as appSelectors from './containers/App/selectors';
// router
import Routing from './containers/Routing';
import * as routingActions from './containers/Routing/actions';
import * as routingSelectors from './containers/Routing/selectors';
// status
import Status from './containers/Status';
import ErrorSection from './containers/Status/ErrorSection';
import LoadingSection from './containers/Status/LoadingSection';
import * as statusActions from './containers/Status/actions';
import * as statusSelectors from './containers/Status/selectors';

// ////////////////////////////////////// utils
import * as api from './utils/api';
import * as auth from './utils/auth';
import configureStore from './utils/configureStore';
import * as fieldOptions from './utils/fieldOptions';
import * as pdf from './utils/pdf';
import * as serviceWorker from './utils/serviceWorker';
import * as validate from './utils/validate';

const globalActions = {
  ...appActions,
  ...routingActions,
  ...statusActions,
};

const globalSelectors = {
  ...appSelectors,
  ...routingSelectors,
  ...statusSelectors,
};

export {
  // components
  A,
  BannerPrimary,
  Button,
  LinkButton,
  FieldCheckboxes,
  FieldDate,
  FieldInput,
  FieldRadioButtons,
  FieldSelect,
  FieldTime,
  Icon,
  Container,
  MainContent,
  MainPrimary,
  Section,
  Overlay,
  Panel,
  Table,
  // containers
  Routing,
  Status,
  ErrorSection,
  LoadingSection,
  globalActions,
  globalSelectors,
  // utils
  api,
  auth,
  configureStore,
  fieldOptions,
  pdf,
  serviceWorker,
  validate,
};

export default App;

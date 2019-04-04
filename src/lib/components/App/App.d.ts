import * as React from 'react';
import * as Router from 'react-router-dom';
import * as History from 'history';

import * as types from '../../utils/types';

export interface AppProps {
  /** Render a custom header */
  renderHeader?: (props: AppProps) => React.ReactNode;

  /** Render custom routing */
  renderRouting?: (props: AppProps) => React.ReactNode;

  /** Render a custom footer */
  renderFooter?: (props: AppProps) => React.ReactNode;

  /** Fix header to top */
  fixedHeader?: boolean;

  /** Align header nav to right */
  alignHeader?: 'center'
    | 'left'
    | 'right';

  /** Title to render in header in place of the home link */
  headerTitle: string;

  /** Custom header branding logo */
  brandingLogo?: types.BrandingLogo;

  /** Routes to render and build nav from */
  routes?: Array<types.Route>;

  /** Redirect route if no matching route */
  redirect?: string;

  /** Link to use for all 'contact us' links */
  contactLink?: types.ContactLink;

  /** react-router-dom router to use */
  router?: Router.BrowserRouter
    | Router.HashRouter
    | Router.MemoryRouter
    | Router.StaticRouter;

  /** History type to use */
  history: History.History;
}

declare class App extends React.Component<AppProps, {}> {}

export default App;

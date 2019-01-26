import React from 'react';
import T from 'prop-types';
import { HashRouter } from 'react-router-dom';
import classNames from 'classnames';
import debounce from 'lodash.debounce';

import * as propUtils from '../../utils/propTypes';
import ErrorBoundary from '../ErrorBoundary';
import Messages from '../Messages';

import Routing from '../Routing';
import Header from '../Header';
import Footer from '../Footer';

import '../../style/core/css/cagov.core.css';
import '../../style/style.scss';

/**
 * This container handles updating user setttings, rendering
 * the header and footer, and routing. This container is the
 * default export fhe project, and the main entry point of any
 * application that is using this project.
 */
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { returnTopVisible: false };
    this.scrollEvent = debounce(this.onScroll, 200);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEvent);
  }

  // handles displaying the return to top button if scrolled
  onScroll = () => {
    const { returnTopVisible } = this.state;
    const isVisible = window.scrollY > 130;

    if (returnTopVisible !== isVisible) {
      this.setState({ returnTopVisible: isVisible });
    }
  }

  // scrolls window to top
  onClickReturnTop = () => {
    window.scroll(0, 0);
  }

  // render return to top button
  renderReturnTop = () => {
    const { returnTopVisible } = this.state;
    const cn = classNames([
      'return-top',
      { 'is-visible': returnTopVisible },
    ]);

    return (
      <button
        type={'button'}
        className={cn}
        onClick={this.onClickReturnTop}
      />
    );
  }

  // renders default header if no `renderHeader` passed
  renderHeader = () => {
    const {
      renderHeader,
      fixedHeader,
      alignHeader,
      brandingLogo,
      routes,
      contactLink,
    } = this.props;

    if (renderHeader) {
      return renderHeader(this.props);
    }

    const headerProps = {
      fixed: fixedHeader,
      align: alignHeader,
      brandingLogo,
      routes,
      contactLink,
    };

    return <Header {...headerProps} />;
  }

  // renders default routing if no `renderRouting` passed
  renderRouting = () => {
    const {
      renderRouting,
      routes,
      redirect,
    } = this.props;

    if (renderRouting) {
      return renderRouting(this.props);
    }

    const routingProps = {
      routes,
      redirect,
    };

    return <Routing {...routingProps} />;
  }

  // renders default footer if no `renderFooter` passed
  renderFooter = () => {
    const {
      renderFooter,
      contactLink,
    } = this.props;

    if (renderFooter) {
      return renderFooter(this.props);
    }

    const footerProps = {
      contactLink,
    };

    return <Footer {...footerProps} />;
  }

  render() {
    const { router: Router } = this.props;

    return (
      <Router>
        <ErrorBoundary>
          {this.renderHeader()}
          {this.renderRouting()}
          {this.renderFooter()}
          {this.renderReturnTop()}
          <Messages />
        </ErrorBoundary>
      </Router>
    );
  }
}

App.propTypes = {
  /** Render a custom header */
  renderHeader: T.func,
  /** Render custom routing */
  renderRouting: T.func,
  /** Render a custom footer */
  renderFooter: T.func,
  /** Fix header to top */
  fixedHeader: T.bool,
  /** Align header nav to right */
  alignHeader: T.oneOf(['center', 'left', 'right']),
  /** Custom header branding logo */
  brandingLogo: propUtils.brandingLogo,
  /** Routes to render and build nav from */
  routes: T.arrayOf(propUtils.route),
  /** Redirect route if no matching route */
  redirect: T.string,
  /** Link to use for all 'contact us' links */
  contactLink: propUtils.contactLink,
  // /** History to use for managing routing */
  // history: T.object,
  /** react-router-dom router to use */
  router: T.func,
};

App.defaultProps = {
  renderHeader: null,
  renderRouting: null,
  renderFooter: null,
  fixedHeader: true,
  alignHeader: 'right',
  brandingLogo: propUtils.brandingLogoDefault,
  routes: [],
  redirect: null,
  contactLink: propUtils.contactLinkDefault,
  // history: null,
  router: HashRouter,
};

export default App;

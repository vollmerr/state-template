import React from 'react';
import T from 'prop-types';
import { HashRouter } from 'react-router-dom';
import classNames from 'classnames';
import debounce from 'lodash.debounce';

import { routeProp } from '../../utils/propTypes';
import StatusMessage from '../Status/StatusMessage';

import Routing from '../Routing';
import Header from './Header';
import Footer from './Footer';

import odiLogo from '../../images/office-of-digital-innovation-logo.png';
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
    this.setSettings();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEvent);
  }

  // set setttings user has set (in SettingsBar)
  setSettings = () => {
    document.body.style.zoom = Number(localStorage.getItem('zoom'));
    if (localStorage.getItem('highContrast')) {
      document.getElementsByTagName('html')[0].classList.add('high-contrast');
    }
  }

  onScroll = () => {
    const { returnTopVisible } = this.state;
    const isVisible = window.scrollY > 130;

    if (returnTopVisible !== isVisible) {
      this.setState({ returnTopVisible: isVisible });
    }
  }

  onClickReturnTop = () => {
    window.scroll(0, 0);
  }

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

  render() {
    const {
      routes,
      router: Router,
      redirect,
      brandingLogo,
      fixedHeader,
      alignHeader,
      contactLink,
    } = this.props;

    return (
      <Router>
        <>
          <Header
            brandingLogo={brandingLogo}
            fixed={fixedHeader}
            align={alignHeader}
            contactLink={contactLink}
          />
          <Routing routes={routes} redirect={redirect} contactLink={contactLink} />
          <Footer contactLink={contactLink} />
          <StatusMessage />
          {this.renderReturnTop()}
        </>
      </Router>
    );
  }
}

App.propTypes = {
  router: T.func,
  routes: T.arrayOf(routeProp).isRequired,
  redirect: T.string,
  brandingLogo: T.shape({
    src: T.string.isRequired,
    alt: T.string.isRequired,
  }),
  contactLink: T.shape({
    text: T.string.isRequired,
    href: T.string.isRequired,
  }),
  fixedHeader: T.bool,
  alignHeader: T.oneOf(['center', 'left', 'right']),
};

App.defaultProps = {
  router: HashRouter,
  redirect: '/',
  brandingLogo: {
    src: odiLogo,
    alt: 'Office of Digital Innovation logo',
    href: 'https://cdt.ca.gov/',
  },
  contactLink: {
    text: 'Contact Us',
    href: 'https://cdt.ca.gov/support/',
  },
  fixedHeader: true,
  alignHeader: 'center',
};

export default App;

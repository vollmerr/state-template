import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as routerSelectors from '../../Routing/selectors';

const externalLink = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

class Footer extends React.PureComponent {
  getCopyRight = () => `Copyright \u00A9 ${new Date().getFullYear()}`

  render() {
    const { contactLink } = this.props;

    return (
      <React.Fragment>
        <footer id="footer" className="global-footer">
          <div className="container">
            <div className="row">
              <div className="three-quarters">
                <ul className="footer-links">
                  <li><a href="#skip-to-content">Back to Top</a></li>
                  <li><a href="http://www.ca.gov/Use" {...externalLink}>Conditions of Use</a></li>
                  <li><a href="http://www.ca.gov/Privacy" {...externalLink}>Privacy Policy</a></li>
                  <li><a href="http://www.ca.gov/Accessibility" {...externalLink}>Accessibility</a></li>
                  <li><Link to={contactLink}>Contact Us</Link></li>
                </ul>
              </div>
              <div className="quarter text-right">
                <ul className="socialsharer-container">
                  <li>
                    <a href="https://www.flickr.com/groups/californiagovernment">
                      <span className="ca-gov-icon-flickr" aria-hidden="true" />
                      <span className="sr-only">Flickr</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/cagovernment/">
                      <span className="ca-gov-icon-pinterest" aria-hidden="true" />
                      <span className="sr-only">Pinterest</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/cagovernment">
                      <span className="ca-gov-icon-twitter" aria-hidden="true" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/user/californiagovernment">
                      <span className="ca-gov-icon-youtube" aria-hidden="true" />
                      <span className="sr-only">YouTube</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright">
            <div className="container">
              {this.getCopyRight()}
            </div>
          </div>
        </footer>

        <div className="decoration-last">&nbsp;</div>
      </React.Fragment>
    );
  }
}

Footer.propTypes = {
  contactLink: T.string.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  contactLink: routerSelectors.getContactLink(),
});

const withRedux = connect(mapStateToProps);

export default withRedux(Footer);

import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { ErrorSection, LoadingSection, Table } from 'state-template';

// TODO: MOVE TO ST
import Page from '../../components/Page';

import * as actions from './actions';
import * as selectors from './selectors';

export class Auth extends React.PureComponent {
  componentDidMount() {
    const { login } = this.props;
    login({ fedassisteml: 'ryan.vollmer@state.ca.gov', fedassistpwd: '213' });
  }

  render() {
    return (
      <Page title={'Login'}>
      content...
      </Page>
    );
  }
}

Auth.propTypes = {
  // submissionList: T.array.isRequired,
  // getSubmissionList: T.func.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  // submissionList: selectors.selectSubmissionList(),
});

export const mapDispatchToProps = dispatch => ({
  login: props => dispatch(actions.loginRequest(props)),
});

const withRedux = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default withRedux;

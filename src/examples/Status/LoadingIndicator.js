import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  globalActions, Button, globalSelectors, LoadingSection,
} from '../../lib';

export class StatusMessages extends React.Component {
  render() {
    const { isLoading, increaseLoading, descreaseLoading } = this.props;

    return (
      <>
        <h2>Loading Indicator</h2>
        <p>This example shows the global loading indicator.</p>
        <p>
It is automatically updated when API calls are made,
          using the _REQUEST _SUCCESS, _FAILURE action pattern.
        </p>
        <p>
Current loading status:
          {' '}
          {isLoading}
        </p>
        <Button onClick={increaseLoading} text={'Increase Loading'} />
        <Button onClick={descreaseLoading} text={'Descrease Loading'} />
        <LoadingSection />
      </>
    );
  }
}

export const mapStateToProps = createStructuredSelector({
  isLoading: globalSelectors.getIsLoading(),
});

export const mapDispatchToProps = dispatch => ({
  increaseLoading: () => dispatch(globalActions.increaseLoading()),
  descreaseLoading: () => dispatch(globalActions.decreaseLoading()),
});

const withRedux = connect(mapStateToProps, mapDispatchToProps)(StatusMessages);

export default withRedux;

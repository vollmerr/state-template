import React from 'react';
import T from 'prop-types';

import Button from '../Button';

class ErrorMessage extends React.Component {
  componentWillUnmount() {
    const { onDismiss } = this.props;
    onDismiss();
  }

  onClickDismiss = (event) => {
    const { btnProps, onDismiss } = this.props;
    btnProps.onClick(event);
    onDismiss();
  }

  renderDismissBtn = () => {
    const { btnProps } = this.props;

    if (btnProps) {
      return <Button {...btnProps} onClick={this.onClickDismiss} />;
    }

    return null;
  }

  render() {
    const { error, children } = this.props;

    if (error) {
      const errorMessage = error.message || error;

      return (
        <div className={'error-message'}>
          <div className={'text-center'}>
            <h2>Sorry, something went wrong!</h2>
            <p>{errorMessage}</p>
            {this.renderDismissBtn()}
          </div>
        </div>
      );
    }

    return children;
  }
}

ErrorMessage.propTypes = {
  /** Content to render when no error */
  children: T.node.isRequired,

  /** Provided by redux, error to render */
  error: T.string,

  /** Action to remove the error */
  onDismiss: T.func.isRequired,

  /** Props to pass to `Button` in error message */
  btnProps: T.shape(Button.propTypes),
};

ErrorMessage.defaultProps = {
  error: null,
  btnProps: undefined,
};

export default ErrorMessage;

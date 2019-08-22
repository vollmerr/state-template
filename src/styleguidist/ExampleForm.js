import React from 'react';
import T from 'prop-types';
import { reduxForm, getFormValues } from 'redux-form';
import { connect } from 'react-redux';

import { Button } from '../lib';

/**
 * This is the example form used for all examples
 * that need redux-form. It is not included as part
 * of the library.
 */
export class ExampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showValues: false };
  }

  onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2)); // eslint-disable-line
  }

  onFocusRef = () => {
    const { inputRef } = this.props;
    inputRef.current.focus();
  }

  toggleValues = () => {
    this.setState((state) => ({ showValues: !state.showValues }));
  }

  clickCustomButton = () => {
    const { customButton, formValues } = this.props;
    customButton.onClick(formValues);
  }

  render() {
    const {
      children,
      customButton,
      formValues,
      handleSubmit,
      inputRef,
      reset,
    } = this.props;

    const { showValues } = this.state;

    const valuesText = showValues ? 'Hide Values' : 'Show Values';

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          {children}
          <Button type={'submit'} text={'Submit'} variant={'primary'} />
          <Button text={'Reset'} onClick={reset} variant={'default'} />
          <Button text={valuesText} onClick={this.toggleValues} variant={'standout'} className={'float-right'} />
          {inputRef && <Button text={'Focus `inputRef`'} onClick={this.onFocusRef} variant={'default'} className={'float-right'} />}
          {customButton && <Button {...customButton} className={'float-right'} onClick={this.clickCustomButton} />}
        </form>

        {
          showValues
          && <pre className={'m-t-sm'}>{JSON.stringify(formValues, null, 2)}</pre>
        }
      </div>
    );
  }
}

ExampleForm.propTypes = {
  children: T.node.isRequired,
  customButton: T.shape(Button.propTypes),
  formValues: T.object, // eslint-disable-line
  handleSubmit: T.func.isRequired,
  inputRef: T.shape({ current: T.object }),
  reset: T.func.isRequired,
};

ExampleForm.defaultProps = {
  customButton: null,
  formValues: {},
  inputRef: null,
};

const withReduxForm = reduxForm();
const WrappedForm = withReduxForm(ExampleForm);

const mapStateToProps = (state, props) => ({
  formValues: getFormValues(props.form)(state),
});

// pass down props, allowing to dynamically generate form name...
export default connect(mapStateToProps)(WrappedForm);

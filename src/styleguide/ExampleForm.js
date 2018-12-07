import React from 'react';
import T from 'prop-types';
import { reduxForm } from 'redux-form';

import { Button } from '../lib';

/**
 * This is the example form used for all examples
 * that need redux-form. It is not included as part
 * of the library.
 */
export class ExampleForm extends React.PureComponent {
  static propTypes = {
    handleSubmit: T.func.isRequired,
    reset: T.func.isRequired,
    children: T.node.isRequired,
  }

  onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  }

  render() {
    const { handleSubmit, children, reset } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        {children}
        <Button type={'submit'} text={'Submit'} variant={'primary'} />
        <Button text={'Reset'} onClick={reset} variant={'default'} />
      </form>
    );
  }
}

const withReduxForm = reduxForm();
const WrappedForm = withReduxForm(ExampleForm);

// pass down props, allowing to dynamically generate form name...
export default props => <WrappedForm {...props} />;

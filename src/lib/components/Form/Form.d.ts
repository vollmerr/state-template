import * as React from 'react';
import * as ReduxForm from 'redux-form';

import * as types from '../../utils/types';

export interface FormProps extends ReduxForm.ConfigProps {
  /* form to render */
  children: React.ReactNode;
}

declare class Form extends React.Component<FormProps, {}> { }

export default Form;

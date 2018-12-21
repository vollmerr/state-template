import React from 'react';

import ErrorSection from './ErrorSection';
import LoadingSection from './LoadingSection';

const Status = ({ children, errorProps, loadingProps }) => (
  <>
    <ErrorSection {...errorProps}>
      <LoadingSection {...loadingProps}>
        {children}
      </LoadingSection>
    </ErrorSection>
  </>
);

export default Status;

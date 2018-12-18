import React from 'react';

import ErrorSection from './ErrorSection';
import LoadingSection from './LoadingSection';

const Status = ({ children }) => (
  <>
    <ErrorSection>
      <LoadingSection>
        {children}
      </LoadingSection>
    </ErrorSection>
  </>
);

export default Status;

import React from 'react';

const LoadingIndicator = ({ show, children }) => (
  <div className={'loading-indicator'}>
    <div className={'loading-content'}>
      {children}
      {
        show
        && (
          <>
            <div className={'loading-overlay'} />
            <div className={'uil-ripple-css'}>
              <div />
              <div />
            </div>
          </>
        )
      }
    </div>
  </div>
);

export default LoadingIndicator;

import React from 'react';
import T from 'prop-types';

const Content = ({ className, children }) => (
  <div className={`m-t-md ${className}`} data-test={'content'}>
    {children}
  </div>
);

Content.propTypes = {
  className: T.string,
  children: T.node.isRequired,
};

Content.defaultProps = {
  className: '',
};

export default Content;

import * as React from 'react';

export interface ErrorBoundaryProps {
  /** Content to render when no error */
  children: React.ReactNode;
}

declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, {}> {}

export default ErrorBoundary;

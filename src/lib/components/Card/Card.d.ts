import * as React from 'react';

export interface CardProps {
  /** Content to render */
  children?: React.ReactNode;

  /** Style class name to attach */
  className?: string;

  /** Footer to render */
  footer?: React.ReactNode;

  /** Header to render */
  header?: React.ReactNode;

  /** Action to clear the message */
  onDismiss?: () => void;

  /** Use style variant */
  variant?: 'default'
    | 'understated'
    | 'overstated'
    | 'standout'
    | 'primary'
    | 'danger'
    | 'inverted';
}

declare class Card extends React.Component<CardProps, {}> {}

export default Card;

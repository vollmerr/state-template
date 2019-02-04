import * as React from 'react';

export interface CardProps {
  /** Use style variant */
  variant?: 'default'
    | 'understated'
    | 'overstated'
    | 'standout'
    | 'primary'
    | 'danger'
    | 'inverted';

  /** Header to render */
  header?: React.ReactNode;

  /** Footer to render */
  footer?: React.ReactNode;

  /** Content to render */
  children?: React.ReactNode;

  /** Style class name to attach */
  className?: string;
}

declare class Card extends React.Component<CardProps, {}> {}

export default Card;

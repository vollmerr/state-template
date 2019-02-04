import * as React from 'react';

import * as types from '../../utils/types';

export type IconName =
  | 'logo'
  | 'home'
  | 'menu'
  | 'apps'
  | 'search'
  | 'chat'
  | 'capitol'
  | 'state'
  | 'phone'
  | 'email'
  | 'contact-us'
  | 'calendar'
  | 'bear'
  | 'chat-bubble'
  | 'info-bubble'
  | 'share-button'
  | 'share-facebook'
  | 'share-email'
  | 'share-flickr'
  | 'share-twitter'
  | 'share-linkedin'
  | 'share-googleplus'
  | 'share-instagram'
  | 'share-pinterest'
  | 'share-vimeo'
  | 'share-youtube'
  | 'law-enforcement'
  | 'justice-legal'
  | 'at-sign'
  | 'attachment'
  | 'zipped-file'
  | 'powerpoint'
  | 'excel'
  | 'word'
  | 'pdf'
  | 'share'
  | 'facebook'
  | 'linkedin'
  | 'youtube'
  | 'twitter'
  | 'pinterest'
  | 'vimeo'
  | 'instagram'
  | 'flickr'
  | 'google-plus'
  | 'microsoft'
  | 'apple'
  | 'android'
  | 'computer'
  | 'tablet'
  | 'smartphone'
  | 'roadways'
  | 'travel-car'
  | 'travel-air'
  | 'truck-delivery'
  | 'construction'
  | 'bar-chart'
  | 'pie-chart'
  | 'graph'
  | 'server'
  | 'download'
  | 'cloud-download'
  | 'cloud-upload'
  | 'shield'
  | 'fire'
  | 'binoculars'
  | 'compass'
  | 'sos'
  | 'shopping-cart'
  | 'video-camera'
  | 'camera'
  | 'green'
  | 'loud-speaker'
  | 'audio'
  | 'print'
  | 'medical'
  | 'zoom-out'
  | 'zoom-in'
  | 'important'
  | 'chat-bubbles'
  | 'call'
  | 'people'
  | 'person'
  | 'user-id'
  | 'payment-card'
  | 'skip-backwards'
  | 'play'
  | 'pause'
  | 'skip-forward'
  | 'mail'
  | 'image'
  | 'house'
  | 'gear'
  | 'tool'
  | 'time'
  | 'cal'
  | 'check-list'
  | 'document'
  | 'clipboard'
  | 'page'
  | 'read-book'
  | 'cc-copyright'
  | 'ca-capitol'
  | 'ca-state'
  | 'favorite'
  | 'rss'
  | 'road-pin'
  | 'online-services'
  | 'link'
  | 'magnify-glass'
  | 'key'
  | 'lock'
  | 'info'
  | 'arrow-up'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'carousel-prev'
  | 'carousel-next'
  | 'arrow-prev'
  | 'arrow-next'
  | 'menu-toggle-closed'
  | 'menu-toggle-open'
  | 'carousel-play'
  | 'carousel-pause'
  | 'search-right'
  | 'graduate'
  | 'briefcase'
  | 'images'
  | 'gears'
  | 'tools'
  | 'pencil'
  | 'pencil-edit'
  | 'science'
  | 'film'
  | 'table'
  | 'flowchart'
  | 'building'
  | 'searching'
  | 'wallet'
  | 'tags'
  | 'currency'
  | 'idea'
  | 'lightbulb'
  | 'calculator'
  | 'drive'
  | 'globe'
  | 'hourglass'
  | 'mic'
  | 'volume'
  | 'music'
  | 'folder'
  | 'grid'
  | 'archive'
  | 'contacts'
  | 'book'
  | 'drawer'
  | 'map'
  | 'pushpin'
  | 'location'
  | 'quote-fill'
  | 'question-fill'
  | 'warning-triangle'
  | 'warning-fill'
  | 'check-fill'
  | 'close-fill'
  | 'plus-fill'
  | 'minus-fill'
  | 'caret-fill-right'
  | 'caret-fill-left'
  | 'caret-fill-down'
  | 'caret-fill-up'
  | 'caret-fill-two-right'
  | 'caret-fill-two-left'
  | 'caret-fill-two-down'
  | 'caret-fill-two-up'
  | 'arrow-fill-right'
  | 'arrow-fill-left'
  | 'arrow-fill-down'
  | 'arrow-fill-up'
  | 'arrow-fill-left-down'
  | 'arrow-fill-right-down'
  | 'arrow-fill-right-up'
  | 'arrow-fill-left-up'
  | 'triangle-line-right'
  | 'triangle-line-left'
  | 'triangle-line-up'
  | 'triangle-line-down'
  | 'caret-line-two-right'
  | 'caret-line-two-left'
  | 'caret-line-two-down'
  | 'caret-line-two-up'
  | 'caret-line-right'
  | 'caret-line-left'
  | 'caret-line-up'
  | 'caret-line-down'
  | 'important-line'
  | 'info-line'
  | 'check-line'
  | 'question-line'
  | 'close-line'
  | 'plus-line'
  | 'minus-line'
  | 'question'
  | 'minus-mark'
  | 'plus-mark'
  | 'collapse'
  | 'expand'
  | 'check-mark'
  | 'close-mark'
  | 'triangle-right'
  | 'triangle-left'
  | 'triangle-down'
  | 'triangle-up'
  | 'caret-two-right'
  | 'caret-two-left'
  | 'caret-two-down'
  | 'caret-two-up'
  | 'caret-right'
  | 'caret-left'
  | 'caret-up'
  | 'caret-down'
  | 'filter'
;

export interface IconProps {
  /** Name of icon to use (auto prefixes with ca-gov-icon-) */
  name: IconName;

  /** Class names to attach to the top level div */
  className?: string;

  /** HTML tag to render as  */
  tag?: React.ReactNode;
}

declare class Icon extends React.Component<IconProps, {}> {}

export default Icon;

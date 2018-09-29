declare module 'reactjs-popup' {
  import * as React from 'react';

  type EventType = 'hover' | 'click' | 'focus';
  type Position = 'top left' | 'top right' | 'bottom right' | 'bottom left' | 'right center' | 'left center' | 'top center' | 'bottom center';

  interface Props {
    trigger?: JSX.Element | ((isOpen: boolean) => JSX.Element);
    open?: boolean;
    defaultOpen?: boolean;
    on?: EventType | EventType[];
    children: JSX.Element | ((close: () => void, isOpen: boolean) => JSX.Element);
    position?: Position | Position[];
    offsetX?: number;
    offsetY?: number;
    arrow?: boolean;
    modal?: boolean;
    lockScroll?: boolean;
    closeOnDocumentClick?: boolean;
    closeOnEscape?: boolean;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    onOpen?: () => any;
    onClose?: () => any;
    contentStyle?: object;
    overlayStyle?: object;
    arrowStyle?: object;
    keepTooltipInside?: boolean | string;
  }

  class Popup extends React.Component<Props> {}

  export = Popup;
}

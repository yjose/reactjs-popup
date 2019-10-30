declare module 'reactjs-popup' {
  import * as React from 'react';

  type EventType = 'hover' | 'click' | 'focus';
  type Position = 'top left' | 'top center' | 'top right' |
                  'right top' | 'right center' | 'right bottom' |
                  'bottom left' | 'bottom center' | 'bottom right' |
                  'left top' | 'left center' | 'left bottom' |
                  'center center';

  interface Props {
    trigger?: JSX.Element | ((isOpen: boolean) => JSX.Element);
    open?: boolean;
    disabled?: boolean;
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
    repositionOnResize?: boolean;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    onOpen?: () => any;
    onClose?: () => any;
    contentStyle?: React.CSSProperties;
    overlayStyle?: React.CSSProperties;
    arrowStyle?: React.CSSProperties;
    className?: string;
    keepTooltipInside?: boolean | string;
  }

  export default class Popup extends React.PureComponent<Props> {}
}

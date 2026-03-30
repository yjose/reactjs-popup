import React from 'react';

export type EventType = 'hover' | 'click' | 'focus' | 'right-click';
export type PopupPosition =
  | 'top left'
  | 'top center'
  | 'top right'
  | 'right top'
  | 'right center'
  | 'right bottom'
  | 'bottom left'
  | 'bottom center'
  | 'bottom right'
  | 'left top'
  | 'left center'
  | 'left bottom'
  | 'center center';

export type PopupActions = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};
export interface PopupProps {
  id?: string | number;
  trigger?: JSX.Element | ((isOpen: boolean) => JSX.Element);
  open?: boolean;
  disabled?: boolean;
  nested?: boolean;
  defaultOpen?: boolean;
  on?: EventType | EventType[];
  children: React.ReactNode;

  //| ((close: () => void, isOpen: boolean) => React.ReactNode);
  position?: PopupPosition | PopupPosition[];
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
  onOpen?: (event?: React.SyntheticEvent) => void;
  // the popup can be closed depend on multiple factor: mouse click outside, keyboard esc, click a close button
  onClose?: (
    event?: React.SyntheticEvent | KeyboardEvent | TouchEvent | MouseEvent
  ) => void;
  contentStyle?: React.CSSProperties;
  overlayStyle?: React.CSSProperties;
  arrowStyle?: React.CSSProperties;
  className?: string;
  keepTooltipInside?: boolean | string;
}

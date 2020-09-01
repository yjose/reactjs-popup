import React from 'react';

type PopupStyle = {
  popupContent: {
    tooltip: React.CSSProperties;
    modal: React.CSSProperties;
  };
  popupArrow: React.CSSProperties;
  overlay: {
    tooltip: React.CSSProperties;
    modal: React.CSSProperties;
  };
};

const Style: PopupStyle = {
  popupContent: {
    tooltip: {
      position: 'absolute',
      zIndex: 999,
    },
    modal: {
      position: 'relative',
      margin: 'auto',
    },
  },
  popupArrow: {
    height: '8px',
    width: '16px',
    position: 'absolute',
    background: 'transparent',
    color: '#FFF',
    zIndex: -1,
  },
  overlay: {
    tooltip: {
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      zIndex: 999,
    },
    modal: {
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      display: 'flex',
      zIndex: 999,
    },
  },
};

export default Style;

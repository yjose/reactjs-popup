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
    height: '10px',
    width: '10px',
    position: 'absolute',
    background: 'rgb(255, 255, 255)',
    transform: 'rotate(45deg)',
    margin: '-5px',
    zIndex: 1,
    boxShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 1px',
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

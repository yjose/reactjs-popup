import React from 'react';

export default function Ref(props) {
  const {innerRef} = props;

  return React.Children.map(props.children, child =>
    React.cloneElement(child, {
      ref: node => {
        if (typeof innerRef === 'function') {
          innerRef(node);
        }
      },
    }),
  );
}

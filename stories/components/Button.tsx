import React, { ButtonHTMLAttributes } from 'react';

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ children = 'click Me ', ...props }, forwardedRef) => (
  <button
    ref={forwardedRef}
    {...props}
    style={{ padding: '10px', margin: '10px' }}
  >
    {children}
  </button>
));

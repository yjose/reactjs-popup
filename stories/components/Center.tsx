import React, { ReactNode } from 'react';

const Center = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    {children}
  </div>
);

export default Center;

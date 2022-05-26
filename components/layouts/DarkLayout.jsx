import React from 'react';

function DarkLayout({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      <h3>Dark-Layout</h3>
      {children}
    </div>
  );
}

export default DarkLayout;
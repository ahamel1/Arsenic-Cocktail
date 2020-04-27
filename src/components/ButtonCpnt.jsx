import React from 'react';

function ButtonCpnt ({ className, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonCpnt;

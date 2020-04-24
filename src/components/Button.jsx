import React from "react";

function Button({ className, onClick, value }) {
  return (
    <button type="button" className={className} onClick={onClick} value={value}>
      {value}
    </button>
  );
}

export default Button;
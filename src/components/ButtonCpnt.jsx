import React from 'react';
import PropTypes from 'prop-types';

function ButtonCpnt({ className, onClick, children }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

ButtonCpnt.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default ButtonCpnt;

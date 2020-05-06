import React from 'react';
import PropTypes from 'prop-types';

const Cursor = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="numberAlcohol">
        Choix
        <input
          type="range"
          min="1"
          max="10"
          step="1"
          id="numberAlcohol"
          name="numberAlcohol"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

Cursor.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Cursor;

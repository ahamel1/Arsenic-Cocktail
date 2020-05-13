import React from 'react';
import PropTypes from 'prop-types';

const Cursor = ({
  value,
  onChange,
  content,
  typeDrink,
  idCursor,
  titleCursor,
}) => {
  return (
    <div className="cursor-container">
      <label className="label-cursor" htmlFor={content}>
        {titleCursor}
        <input
          className="cursor"
          type="range"
          min="1"
          max="5"
          step="1"
          id={idCursor}
          name={typeDrink}
          value={value}
          onChange={onChange}
        />
      </label>
      <p>{value}</p>
    </div>
  );
};

Cursor.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  typeDrink: PropTypes.string.isRequired,
  idCursor: PropTypes.string.isRequired,
  titleCursor: PropTypes.string.isRequired,
};

export default Cursor;

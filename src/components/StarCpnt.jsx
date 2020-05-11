import React from 'react';
import PropTypes from 'prop-types';

const StarCpnt = ({ handleFavori }) => {
  return (
    <>
      <button type="button" onClick={handleFavori}>
        Favori
      </button>
    </>
  );
};

StarCpnt.propTypes = {
  handleFavori: PropTypes.func.isRequired,
};

export default StarCpnt;

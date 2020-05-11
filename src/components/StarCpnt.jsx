import React from 'react';
import PropTypes from 'prop-types';
import star from './etoile.png';
import starFull from './etoile_full.png';

const StarCpnt = ({ handleFavori, stateFavori }) => {
  return (
    <button id="button-favori" type="button" onClick={handleFavori}>
      <img src={stateFavori ? starFull : star} alt="Favori" />
    </button>
  );
};

StarCpnt.propTypes = {
  handleFavori: PropTypes.func.isRequired,
  stateFavori: PropTypes.bool.isRequired,
};

export default StarCpnt;

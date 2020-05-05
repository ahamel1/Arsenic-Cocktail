import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TitleCpnt from './TitleCpnt';
import ButtonCpnt from './ButtonCpnt';

function HomePart({
  title,
  buttonTexte,
  linkTo,
  imageHomeSrc,
  imageHomeAlt,
  className,
}) {
  return (
    <div className={className}>
      <img src={imageHomeSrc} alt={imageHomeAlt} />
      <TitleCpnt title={title} />
      <Link to={linkTo}>
        <ButtonCpnt className="button-cpnt">{buttonTexte}</ButtonCpnt>
      </Link>
    </div>
  );
}

HomePart.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTexte: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  imageHomeSrc: PropTypes.string.isRequired,
  imageHomeAlt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default HomePart;

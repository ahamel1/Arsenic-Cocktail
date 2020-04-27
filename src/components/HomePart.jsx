import React from 'react';
import { Link } from 'react-router-dom';
import TitleCpnt from './TitleCpnt';

function HomePart ({ title, buttonTexte, linkTo, imageHomeSrc, imageHomeAlt, className }) {
  return (
    <div className={className}>
      <img src={imageHomeSrc} alt={imageHomeAlt} />
      <TitleCpnt title={title} />
      <Link to={linkTo}><button>{buttonTexte}</button></Link>
    </div>
  );
}

export default HomePart;

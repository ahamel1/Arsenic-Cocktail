import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import TitleCpnt from './TitleCpnt';
import ButtonCpnt from './ButtonCpnt';

function HomePart ({ title, buttonTexte, linkTo, imageHomeSrc, imageHomeAlt, className }) {

  return (
    <div className={className}>
      <img src={imageHomeSrc} alt={imageHomeAlt} />
      <TitleCpnt title={title} />
      <Link to={linkTo}><ButtonCpnt className='button-cpnt'>{buttonTexte}</ButtonCpnt></Link>
    </div>
  );
}

export default HomePart;

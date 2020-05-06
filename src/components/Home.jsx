import React from 'react';
import HomePart from './HomePart';
import piment from './piment.png';
import shaker from './shaker.png';
import banane from './banane.png';

function Home() {
  return (
    <div className="Home container">
      <HomePart
        className="alcool homepart-position"
        title="ALCOOL"
        buttonTexte="J'SUIS CHAUD"
        linkTo="/alcool"
        imageHomeSrc={shaker}
        imageHomeAlt="shaker"
      />
      <HomePart
        className="la-folie homepart-position"
        title="FOLIE"
        buttonTexte="J'SUIS CHAUD"
        linkTo="/folie"
        imageHomeSrc={piment}
        imageHomeAlt="piment"
      />
      <HomePart
        className="sans-alcool homepart-position"
        title="SANS ALCOOL"
        buttonTexte="J'SUIS CHAUD"
        linkTo="/soft"
        imageHomeSrc={banane}
        imageHomeAlt="banane"
      />
    </div>
  );
}

export default Home;

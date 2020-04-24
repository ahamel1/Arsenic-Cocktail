import React from 'react';
import HomePart from './HomePart';

function Home () {
  return (
    <div className='Home'>
      <HomePart title='ALCOOL' buttonTexte="J'SUIS CHAUD" linkTo='/alcool' imageHomeSrc='' imageHomeAlt='shaker' />
      <HomePart title='FOLIE' buttonTexte="J'SUIS CHAUD" linkTo='/folie' imageHomeSrc='' imageHomeAlt='piment' />
      <HomePart title='SOFT' buttonTexte="J'SUIS CHAUD" linkTo='/soft' imageHomeSrc='' imageHomeAlt='banane' />
    </div>
  );
}

export default Home;

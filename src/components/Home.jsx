import React from 'react';
import HomePart from './HomePart';

function Home () {
  return (
    <div className='Home container'>
      <HomePart className='alcool' title='ALCOOL' buttonTexte="J'SUIS CHAUD" linkTo='/alcool' imageHomeSrc='' imageHomeAlt='shaker' />
      <HomePart className='la-folie' title='FOLIE' buttonTexte="J'SUIS CHAUD" linkTo='/folie' imageHomeSrc='' imageHomeAlt='piment' />
      <HomePart className='sans-alcool' title='SOFT' buttonTexte="J'SUIS CHAUD" linkTo='/soft' imageHomeSrc='' imageHomeAlt='banane' />
    </div>
  );
}

export default Home;

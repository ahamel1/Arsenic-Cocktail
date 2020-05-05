import React from 'react';
import { useTrail, animated, config } from 'react-spring';
import HomePart from './HomePart';
import piment from './piment.png';
import shaker from './shaker.png';
import banane from './banane.png';

function Home() {
  const arrCpnt = [
    <HomePart className='alcool homepart-position' title='ALCOOL' buttonTexte="J'SUIS CHAUD" linkTo='/alcool' imageHomeSrc={shaker} imageHomeAlt='shaker' />,
    <HomePart className='la-folie homepart-position' title='FOLIE' buttonTexte="J'SUIS CHAUD" linkTo='/folie' imageHomeSrc={piment} imageHomeAlt='piment' />,
    <HomePart className='sans-alcool homepart-position' title='SANS ALCOOL' buttonTexte="J'SUIS CHAUD" linkTo='/soft' imageHomeSrc={banane} imageHomeAlt='banane' />
  ];
  const trail = useTrail(arrCpnt.length, {
    config: config.gentle,
    transform: 'translateX(0vw)',
    width: 'calc(100vw / 3)',
    from: { transform: 'translateX(-100vw)' }
  });
  return (
    <div className="Home container">
      {trail.map(({...rest }, index) => (
        <animated.div style={{...rest}}>{arrCpnt[index]}</animated.div>
      ))}
    </div>
  );
}

export default Home;

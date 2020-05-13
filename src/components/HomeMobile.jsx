import React from 'react';
import Swiper from 'react-id-swiper';
import HomePart from './HomePart';
import piment from './piment.png';
import shaker from './shaker.png';
import banane from './banane.png';
import './swiper.css';

function HomeMobile() {
  return (
    <div className="home-mobile">
      <Swiper
        activeSlideKey="1"
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
      >
        <div className="homepart-mobile" key="0">
          <HomePart
            className="alcool homepart-position"
            title="ALCOOL"
            buttonTexte="J'SUIS CHAUD"
            linkTo="/alcool"
            imageHomeSrc={shaker}
            imageHomeAlt="shaker"
          />
        </div>
        <div className="homepart-mobile" key="1">
          <HomePart
            className="la-folie homepart-position"
            title="FOLIE"
            buttonTexte="J'SUIS CHAUD"
            linkTo="/folie"
            imageHomeSrc={piment}
            imageHomeAlt="piment"
          />
        </div>
        <div className="homepart-mobile" key="2">
          <HomePart
            className="sans-alcool homepart-position"
            title="SANS ALCOOL"
            buttonTexte="J'SUIS CHAUD"
            linkTo="/soft"
            imageHomeSrc={banane}
            imageHomeAlt="banane"
          />
        </div>
      </Swiper>
    </div>
  );
}

export default HomeMobile;

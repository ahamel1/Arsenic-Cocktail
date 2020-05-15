import React from 'react';
import { useTrail, animated, config } from 'react-spring';
import HomePart from './HomePart';
import piment from './piment.png';
import shaker from './shaker.png';
import banane from './banane.png';
import easteregg from './mariachi.mp3';
import eastereggimg from './easteregg.png';

function Home() {
  const arrCpnt = [
    <HomePart
      className="alcool homepart-position"
      title="ALCOOL"
      buttonTexte="J'SUIS CHAUD"
      linkTo="/alcool"
      imageHomeSrc={shaker}
      imageHomeAlt="shaker"
    />,
    <HomePart
      className="la-folie homepart-position"
      title="FOLIE"
      buttonTexte="J'SUIS CHAUD"
      linkTo="/folie"
      imageHomeSrc={piment}
      imageHomeAlt="piment"
    />,
    <HomePart
      className="sans-alcool homepart-position"
      title="SANS ALCOOL"
      buttonTexte="J'SUIS CHAUD"
      linkTo="/soft"
      imageHomeSrc={banane}
      imageHomeAlt="banane"
    />,
  ];
  const trail = useTrail(arrCpnt.length, {
    config: config.gentle,
    transform: 'translateX(0vw)',
    width: 'calc(100vw / 3)',
    from: { transform: 'translateX(-100vw)' },
  });

  const playAudio = () => {
    const audioEl = document.getElementsByClassName('audio-element')[0];
    audioEl.play();
  };

  return (
    <>
      <div className="Home container">
        {trail.map(({ ...rest }, index) => (
          <animated.div style={{ ...rest }}>{arrCpnt[index]}</animated.div>
        ))}
      </div>
      <div>
        <div className="ee">
          <button type="button" onClick={playAudio} onKeyDown={playAudio}>
            <img src={eastereggimg} alt="easteregg" />
          </button>
          <audio className="audio-element">
            <source src={easteregg} />
            <track
              src="captions_en.vtt"
              kind="captions"
              label="english_captions"
            />
          </audio>
        </div>
      </div>
    </>
  );
}

export default Home;

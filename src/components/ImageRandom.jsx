import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import verreVide from './verre-vide.jpg';

const calc = (x, y) => [
  (y - window.innerHeight / 2) / 50,
  -(x - window.innerWidth / 1.5) / 50,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function ImageRandom({ source }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const { xys } = props;
  return (
    <animated.img
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: xys.interpolate(trans) }}
      src={verreVide && source}
    />
  );
}

ImageRandom.propTypes = {
  source: PropTypes.string.isRequired,
  xys: PropTypes.arrayOf.isRequired,
};

export default ImageRandom;

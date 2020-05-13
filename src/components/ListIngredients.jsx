import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTrail, animated } from 'react-spring';

const config = { mass: 5, tension: 2000, friction: 200 };

function ListIngredients({ list }) {
  const listWithId = list.map((item, i) => {
    return { id: i, name: item };
  });

  const [toggle] = useState(true);
  const trail = useTrail(listWithId.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 30 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div className="trails-main">
      <ul>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={list[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate(() => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.li style={{ height }}>{list[index]}</animated.li>
          </animated.div>
        ))}
      </ul>
    </div>
  );
}

ListIngredients.propTypes = {
  list: PropTypes.arrayOf.isRequired,
};

export default ListIngredients;

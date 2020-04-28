import React from 'react';
import { useTrail, animated, config } from 'react-spring';

function ListIngredients ({ list }) {
  const trail = useTrail(list.length, {
    config: config.wobbly,
    transform: 'translateY(0vh)',
    from: { transform: 'translateY(-70vh)' }
  });
  return (
    <div>
      {trail.map(({...rest }, index) => (
        <ul key={list[index]}>
          <animated.li style={{ ...rest }}>{list[index]}</animated.li>
        </ul>
      ))}
    </div>
  );
}
export default ListIngredients;

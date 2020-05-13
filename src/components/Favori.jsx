import React, { useState, useEffect } from 'react';
import { useTrail, animated, config } from 'react-spring';

const Favori = () => {
  const [recipe, setRecipe] = useState(['Votre liste est vide...']);
  useEffect(() => {
    if (localStorage.getItem('Cocktail1')) {
      setRecipe(localStorage.getItem('Cocktail1').split('**'));
    }
  }, []);

  const recipeWithId = recipe.map((item, i) => {
    return { id: i, name: item };
  });
  const [toggle] = useState(true);
  const trail = useTrail(recipeWithId.length, {
    config: config.slow,
    opacity: toggle ? 1 : 0,
    left: '0px',
    from: { opacity: 0, left: '-150px' },
    delay: 300,
  });

  const trail2 = useTrail(recipeWithId.length, {
    config,
    opacity: toggle ? 1 : 0,
    left: '0px',
    from: { opacity: 0, left: '150px' },
    delay: 300,
  });

  return (
    <div className="container container-mobile">
      <div className="alcool alcool-other-pages" />
      <div className="la-folie la-folie-other-pages" />
      <div className="sans-alcool sans-alcool-other-pages" />
      <div id="text-over">
        <h2>Favori</h2>
        <ul>
          {trail.map((animation, index) =>
            index % 2 === 0 ? (
              <animated.li style={animation} key={recipe[index]}>
                {recipe[index]}
              </animated.li>
            ) : (
              <animated.li style={trail2[index]} key={recipe[index]}>
                {recipe[index]}
              </animated.li>
            )
          )}
          {/* {recipe.map((elt) => (
            <li>{elt}</li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default Favori;

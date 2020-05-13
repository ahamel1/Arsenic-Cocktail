import React, { useState, useEffect } from 'react';

const Favori = () => {
  const [recipe, setRecipe] = useState(['Votre liste est vide...']);
  useEffect(() => {
    if (localStorage.getItem('Cocktail1')) {
      setRecipe(localStorage.getItem('Cocktail1').split('**'));
    }
  }, []);

  return (
    <div className="container container-mobile">
      <div className="alcool alcool-other-pages" />
      <div className="la-folie la-folie-other-pages" />
      <div className="sans-alcool sans-alcool-other-pages" />
      <div id="text-over">
        <h2>Favori</h2>
        <ul>
          {recipe.map((elt) => (
            <li>{elt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favori;

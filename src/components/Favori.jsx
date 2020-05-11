import React, { useState } from 'react';

const Favori = () => {
  const [recipe] = useState(
    localStorage.getItem('RecipeCocktail').split('**') || ['Pas de favori...']
  );

  return (
    <div className="container">
      <div className="alcool" />
      <div className="la-folie" />
      <div className="sans-alcool" />
      <div id="text-over">
        <h2>Cocktail favori :</h2>
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

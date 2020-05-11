import React, { useState } from 'react';

const Favori = () => {
  const [recipe] = useState(
    localStorage.getItem('Cocktail1').split('**') || ['Votre liste est vide...']
  );

  return (
    <div className="container">
      <div className="alcool" />
      <div className="la-folie" />
      <div className="sans-alcool" />
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

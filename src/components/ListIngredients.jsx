import React from "react";

function ListIngredients({ list }) {
  return (
    <ul>
      {list.map((item, index) => {
        return <li key={index}> {item}</li>;
      })}
    </ul>
  );
}

export default ListIngredients;

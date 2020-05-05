import React from 'react';
import PropTypes from 'prop-types';

function ListIngredients({ list }) {
  const listWithId = list.map((item, i) => {
    return { id: i, name: item };
  });
  return (
    <ul>
      {listWithId.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
}

ListIngredients.propTypes = {
  list: PropTypes.arrayOf.isRequired,
};

export default ListIngredients;

import React from 'react';
import PropTypes from 'prop-types';

function TitleCpnt({ title }) {
  return <h2>{title}</h2>;
}

TitleCpnt.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleCpnt;

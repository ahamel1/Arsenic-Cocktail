import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

const StarCpnt = ({ handleFavori }) => {
  return (
    <Button onClick={handleFavori} icon>
      <Icon name="star outline" />
    </Button>
  );
};

StarCpnt.propTypes = {
  handleFavori: PropTypes.func.isRequired,
};

export default StarCpnt;

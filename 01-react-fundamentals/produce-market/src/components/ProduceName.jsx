import React from 'react';
import PropTypes from 'prop-types';

function ProduceName(props) {
  return (
    <li>{props.name}</li>
  );
}

ProduceName.propTypes = {
  name: PropTypes.string.isRequired
};

export default ProduceName;

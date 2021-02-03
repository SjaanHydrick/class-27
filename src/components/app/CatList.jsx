import React from 'react';
import PropTypes from 'prop-types';
import Cat from './Cat';
import './App.css';

const CatList = ({ cats }) => {
  const catElements = cats.map(cat => (
    <li key={cat.id}>
      <Cat {...cat} />
    </li>
  ));

  return (
    <ul>
      {catElements}
    </ul>
  );
};

CatList.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.object,
    name: PropTypes.string.isRequired,
    temperament: PropTypes.string.isRequired
  })).isRequired
};

export default CatList;

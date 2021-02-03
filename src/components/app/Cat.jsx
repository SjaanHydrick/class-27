import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

const Cat = ({ image, name, temperament }) => (
  <figure>
    {
      image ?
        <img src={image.url} />
        : 
        <p>No Image Found</p>

    }
    <p className={styles.catName}>{name}</p>
    <p className={styles.catTemper}>{temperament}</p>
  </figure>
);

Cat.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string.isRequired,
  temperament: PropTypes.string.isRequired
};

export default Cat;

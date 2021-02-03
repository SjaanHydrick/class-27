import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

const Cat = ({ image, name }) => (
  <figure>
    {
      !image || image.url === undefined ?
        <p className={styles.noImage}>No Image Found</p>
        : 
        <img className={styles.thumbnail} src={image.url} />

    }
    <p className={styles.catName}>{name}</p>
  </figure>
);

Cat.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string.isRequired
};

export default Cat;

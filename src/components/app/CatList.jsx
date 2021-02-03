import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cat from './Cat';
import styles from './App.css';

const CatList = ({ cats }) => {
  const catElements = cats.map(cat => (
    <div className={styles.cat} key={cat.id}>
      <Link to={`/${cat.id}`}>
        <Cat {...cat} />
      </Link>
    </div>
  ));

  return (
    <div className={styles.catList}>
      {catElements}
    </div>
  );
};

CatList.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.object,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default CatList;

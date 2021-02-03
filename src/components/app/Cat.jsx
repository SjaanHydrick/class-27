import React from 'react';
import PropTypes from 'prop-types';

const Cat = ({ image, name, temperament }) => (
  <div className="cat">
    {
      image ?
        <img src={image.url} />
        : 
        <p>No Image Found</p>

    }
    <p className="cat-name">{name}</p>
    <p className="cat-temper">{temperament}</p>
  </div>
);

Cat.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string.isRequired,
  temperament: PropTypes.string.isRequired
};

export default Cat;

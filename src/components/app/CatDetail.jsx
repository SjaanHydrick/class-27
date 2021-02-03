import React, { useState, useEffect } from 'react';
import { getCat } from '../../services/catApi';
import { useParams } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './App.css';

const CatDetail = () => {
  const [chosenCat, setCat] = useState();
  const { id } = useParams();

  useEffect(async() => {
    const cat = await getCat(id);
    setCat(cat);
    console.log(cat);
  }, []
  );

  return (
    <>
      {chosenCat ?
        <div>
          {
            chosenCat.reference_image_id === undefined ?
              <p>No Image Found</p>
              : 
              <img src={`https://cdn2.thecatapi.com/images/${chosenCat.reference_image_id}.jpg`} />
          }
          <p className={styles.catName}>{chosenCat.name}</p>
          <p className={styles.origin}>{chosenCat.origin}</p>
          <p className={styles.desc}>{chosenCat.description}</p>
        </div>
        :
        <p>Loading...</p>
      } 
    </>
  );
};

export default CatDetail;

// const CatDetail = ({ image, name, origin, description }) => (
//   <figure>
//     {
//       !image || image.url === undefined ?
//         <p>No Image Found</p>
//         : 
//         <img src={image.url} />
//     }
//     <p className={styles.catName}>{name}</p>
//     <p className={styles.origin}>{origin}</p>
//     <p className={styles.desc}>{description}</p>
//   </figure>
// );

// CatDetail.propTypes = {
//   image: PropTypes.object,
//   name: PropTypes.string.isRequired,
//   origin: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired
// };

// export default CatDetail;

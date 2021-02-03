import React, { useState, useEffect } from 'react';
import { getCat } from '../../services/catApi';
import { useParams } from 'react-router-dom';
import styles from './App.css';

const CatDetail = () => {
  const [chosenCat, setCat] = useState();
  const { id } = useParams();

  useEffect(async() => {
    const cat = await getCat(id);
    setCat(cat);
    // console.log(cat);
  }, []
  );

  return (
    <>
      {chosenCat ?
        <div>
          {
            chosenCat.reference_image_id === undefined ?
              <p className={styles.noImage}>No Image Found</p>
              : 
              <img src={`https://cdn2.thecatapi.com/images/${chosenCat.reference_image_id}.jpg`} />
          }
          <h3 className={styles.catName}>{chosenCat.name}</h3>
          <h4 className={styles.origin}>{chosenCat.origin}</h4>
          <p className={styles.desc}>{chosenCat.description}</p>
        </div>
        :
        <p className={styles.loading}>Loading...</p>
      } 
    </>
  );
};

export default CatDetail;

import React, { Component } from 'react';
import { getCats } from '../../services/catApi';
import CatList from './CatList';
import styles from './App.css';

export default class AllCats extends Component {
    state = {
      cats: []
    }

    componentDidMount() {
      getCats()
        .then(cats => this.setState({ cats }));
    }

    render() {
      const { cats } = this.state;
      // console.log(cats);
      return (
        <div>
          {
            cats ? 
              <CatList cats={cats} />
              :
              <p className={styles.loading}>Loading...</p>
          }
        </div>
      );
    }
}

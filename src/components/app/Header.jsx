import React, { Component } from 'react';
import styles from './App.css';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>Felis Catus</h1>
        <h2>The Tiny Monsters We Shower With Love</h2>
      </div>
    );
  }
}

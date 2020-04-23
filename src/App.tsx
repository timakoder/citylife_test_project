import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import styles from './App.module.css';
import 'typeface-roboto';

const App = () =>
  <div className={styles.root}>
    <Header/>
    <Body/>
    <Footer/>
  </div>

export default App;

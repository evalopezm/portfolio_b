import React from 'react';
import '../stylesheets/App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Frontworks from './Frontworks';
import Commsworks from './Commsworks';
import Cv from './CV';
import Contact from './Contact';
import Menu from './Menu';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Portfolio de Eva López Merino</h1>
      </header>
      <main>
        <Menu></Menu>
        <Frontworks></Frontworks>
        <Commsworks></Commsworks>
        <Cv></Cv>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

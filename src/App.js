import React, {Component} from 'react';
import { connect } from 'redux-zero/react';
import { Icono } from './Components/Icono';
import { Header } from './Components/Header';
import { About } from './Components/About';
import { Skills } from './Components/Skills';
import { Portfolio } from './Components/Portfolio';
import {Contact} from './Components/Contact';
import {Footer} from './Components/Footer';

const App = ({portfolio}) => {
  return (
    <div>
      <Icono />
      <Header />
      <About />
      <Skills/>
      <Portfolio/>
      <Contact />
      <Footer />
    </div>
  );
}

// -}export default App
const mapToProps = ({portfolio}) => ({portfolio});
export default connect(mapToProps)(App);


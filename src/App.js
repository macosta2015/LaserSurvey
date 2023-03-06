import React from 'react';
import Data from './components/data/Data';
import Cloud from './components/cloud/Cloud';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Recovery from './components/recovery/Recovery';
import Footer from './components/footer/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Recovery />
      <Footer />
    </>
  );
}

export default App;

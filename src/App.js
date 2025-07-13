import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurProducts from './components/OurProducts';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><AboutUs /></div>
      <div id="products"><OurProducts /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}

export default App;

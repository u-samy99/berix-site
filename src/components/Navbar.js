import React, { useState } from 'react';


function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


const Navbar = () => (
  
  <nav className="navbar">

    <div className="flag-container">
      <img src="images/en.png" alt="USA Flag" className="flag-icon" />
    </div>

    {/* <img src="images/berixTop.jpg" alt=""/> */}
   <img src="images/LogoBerix.jpeg" alt="Logoo" width='150px' height='150px' /> 


    
    <div className="hero-text">
    <div> <br/> </div>
    <div> <br/> </div>
    <p2 style={{ fontSize: '40px,'}}> <div> <br/> </div>  <div> <br/> </div> Let's shape the future of flight, together</p2>
    </div>
    <ul>
      <li onClick={() => scrollToSection('home')}> <strong>Home</strong></li>
      <li onClick={() => scrollToSection('about')}><strong>About Us</strong></li>
      <li onClick={() => scrollToSection('products')}><strong>Our Product</strong></li>
      <li onClick={() => scrollToSection('contact')}><strong>Contact</strong></li>
    </ul>
    

  </nav>
);

export default Navbar;

import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  const handleMenuClick = (id) => {
    scrollToSection(id);
    closeDrawer();
  };

  return (
    <nav className="navbar">
      <div className="flag-container">
        <img src="images/en.png" alt="USA Flag" className="flag-icon" />
      </div>

      <div className="logoo">
        <img src="images/LogoBerix.jpeg" alt="Logoo" width="150px" height="150px" />
      </div>

      <div className="hero-text">
        <p style={{ fontSize: '24px' }}>
          Let's shape the future of flight, together
        </p>
      </div>

      <div className="desktop-menu">
        <ul>
          <li onClick={() => scrollToSection('home')}><strong>Home</strong></li>
          <li onClick={() => scrollToSection('about')}><strong>About Us</strong></li>
          <li onClick={() => scrollToSection('products')}><strong>Our Product</strong></li>
          <li onClick={() => scrollToSection('contact')}><strong>Contact</strong></li>
        </ul>
      </div>
      

      {/* Mobile Menu Button */}
      <Button className="mobile-menu-button" type="text" icon={<MenuOutlined />} onClick={showDrawer} />

      {/* Mobile Drawer */}
      <Drawer title="Menu" placement="right" onClose={closeDrawer} open={visible}>
        <Menu mode="vertical" onClick={({ key }) => handleMenuClick(key)}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About Us</Menu.Item>
          <Menu.Item key="products">Our Product</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
        </Menu>
      </Drawer>
    </nav>
  );
};

export default Navbar;

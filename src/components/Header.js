import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
   
      <div className="logo"> CleverBooks</div>
      <nav className="nav">
        <a href="#features">Product</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Industry</a>
        <a href="#features">Customer Stories</a>
        <a href="#pricing">About</a>
        <a href="#contact">Blog</a>
        <button className='btnh' data="Login"></button>
        <button className='btnhd' data="Talk to us"></button>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import './Header.css';

const Header = ({ setShowLogin, setMenu }) => {
  const handleViewMenuClick = () => {
    const menuSection = document.getElementById("explore-menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMenu("menu");
  };

  return (
    <div className="header">
      <div className="header-contents">
        <h3>Welcome to</h3>
        <h1><span>Menu </span>Mingo's</h1>
        <p>Your favorite spot for fresh coffee, delicious pastries, and pre-order convenience.</p>
        <div className="buttons">
          {/* Sign In button that triggers the LoginPopup */}
          <button onClick={() => setShowLogin(true)}>Sign In</button> 
          <button className="btn" onClick={handleViewMenuClick}>View Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({ setMenu }) => {
  const [menu, setActiveMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <h1 className='mingos-logo'>
          <span className='menu-text'>MENU</span> <span className='mingos-text'>MINGOS</span>
        </h1>
      </div>
      <Link to='/'> <img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setActiveMenu("home")} className={menu === 'home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={() => setActiveMenu("menu")} className={menu === 'menu' ? 'active' : ''}>Menu</a>
        <a href='#footer' onClick={() => setActiveMenu("contact-us")} className={menu === 'contact-us' ? 'active' : ''}>Contact us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {token ? (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='nav-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li>
                <img src={assets.logout_icon} alt="" />
                <p onClick={logout}>Logout</p>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;

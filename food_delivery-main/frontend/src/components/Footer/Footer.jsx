import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Menu Mingos is a user-friendly food ordering website designed specifically for Canteen Mingos. It allows students and staff to conveniently browse the digital menu, place orders online, and receive unique order tokens for pickup. With features like real-time token tracking, QR code generation for easy access, and secure login, Menu Mingos streamlines the food ordering experience and reduces wait times at the canteen. It’s built for speed, simplicity, and efficiency—making mealtimes at Mingos smoother and more organized.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>MENU MINGOS</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-6361585885</li>
                        <li>contact@menu-mingos.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2924 @MenuMingos.com - All Right Reserved</p>
        </div>
    )
}

export default Footer

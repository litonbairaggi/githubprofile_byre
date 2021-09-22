import React from 'react';
import logo from '../images/Octocat.png';
import './Header.css'
const Header = () => {
    return (
        <div className="header-container profileimage">
            <img src={logo} alt="Github"/>
        </div>
    );
};

export default Header;
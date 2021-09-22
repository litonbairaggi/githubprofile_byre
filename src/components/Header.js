import React from 'react';
import logo from '../images/Octocat.png';
import './Header.css'
const Header = () => {
    return (

            <header>
                <div className="header-container profileimage">
                    <img src={logo} alt="Github"/>
                </div>
            </header>
    );
};

export default Header;
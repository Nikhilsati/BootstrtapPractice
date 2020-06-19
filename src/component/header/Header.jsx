import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="left-nav">
                <img className="logo" src= { require("../../images/Bootstrap logo.svg") } alt="logo" />
                <a>Home</a>
                <a>Getting Started</a>
                <a>Components</a>
            </nav>
            <nav className="right-nav">
                <a>v1.0.1 (Bootstrap 4.5)</a>
            </nav>
        </header>
        
    )
}

export default Header;
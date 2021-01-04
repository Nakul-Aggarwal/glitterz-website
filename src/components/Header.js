import React from "react";
import Navbar from './Navbar/Navbar.js'


const Header = () => {
    return (
        <>
            <header id="header" className="fixed-top">
                <Navbar></Navbar>
            </header>
        </>
    );
}

export default Header;
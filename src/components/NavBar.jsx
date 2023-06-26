import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.scss';
import logo from '../assets/logo_image.png'

const NavBar = () => {
    return (
        <nav>
            <a href="">
                <img src={logo} alt="My Image" />
                <h2>Sky<span>dah</span></h2>
            </a>

            <p><Link to="/">BACK HOME</Link></p>
        </nav>
    )
}

export default NavBar
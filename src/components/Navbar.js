import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar() {
    /*Event listener */
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 0) resizeNav("dark");
        if (window.pageYOffset === 0) resizeNav("transparent");
    });

    const resizeNav = type => {
        let nav = document.querySelector(".nav");

        if (type === "dark") {
            nav.style.background = "rgba(25,25,25,.85)";
            nav.style.height = "65px";
         
        } else if (type === "transparent") {
            nav.style.background = "transparent";
            nav.style.height = "75px";
            
        }
    };

    return (
        <nav className="nav fixed flex-center container">
            <h1>Lifestyle Vacation Resorts</h1>
            <ul>
                <li><a className='nav-link' href="/#home">Home</a></li>
                <li><a className='nav-link' href="/#resorts">Resorts</a></li>
                <li><Link className='nav-link' to="/">Contact Us</Link></li>
            <Link style={{textDecoration: 'none'}} to="/book" className="nav-book-btn">Book Online</Link>
            
            </ul>
        </nav>
    );
}

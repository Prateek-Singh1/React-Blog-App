import React, { useState } from 'react'
import "./Navbar.css"
import { BiMenu } from "react-icons/bi";

export const Navbar = () => {

    const [showNavBar, setShowNavBar] = useState(false)


    return (
        <div>
            <div className="heading-container">
            <span>The</span>
            <span>Siren</span>
            </div>
            <nav className={showNavBar ? "navBarMenu" : "nav" }>
                <ul>
                    <li>Home</li>
                    <li>Bollywood</li>
                    <li>Technology</li>
                    <li>Hollywood</li>
                    <li>Fitness</li>
                    <li>Food</li>
                </ul>
            </nav>

            <div className="bi-menu">
                    <a href="#" onClick={() => setShowNavBar(!showNavBar)}>
                        <BiMenu/>
                    </a>
            </div>

            <br/>
            <hr/>
        </div>
    )
}


export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiMenu } from "react-icons/bi";

const Navbarmenu = () => {
  const [showMediaIcons, setshowMediaIcons] = useState(false);

  return (
    <>
      <div className="heading-container">
        <span className="the">The</span>
        <span className="siren">Siren</span>
      </div>
      <br />
      <nav className="main-nav">
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link id="home" to={"./home"}>
                Home
              </Link>
            </li>
            <li>
              <Link id="bollywood" to={"./bollywood"}>
                Bollywood
              </Link>
            </li>
            <li>
              <Link id="technology" to={"./technology"}>
                Technology
              </Link>
            </li>
            <li>
              <Link id="hollywood" to={"./hollywood"}>
                Hollywood
              </Link>
            </li>
            <li>
              <Link id="fitness" to={"./fitness"}>
                Fitness
              </Link>
            </li>
            <li>
              <Link id="food" to={"./food"}>
                Food
              </Link>
            </li>
          </ul>
        </div>
        <div className="bi-menu">
          <a href="#" onClick={() => setshowMediaIcons(!showMediaIcons)}>
            <BiMenu />
          </a>
        </div>
      </nav>
      <br />
    </>
  );
};

export default Navbarmenu;

// import { Link } from 'react-router-dom';
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Nav() {
  return (
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container nav-container">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Nav;

// <div class="nav-bar">

// </div>

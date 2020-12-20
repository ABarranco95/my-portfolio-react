import { Link } from 'react-router-dom';
import React from 'react';


function Nav() {
    return (
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Skills</Link>
                <Link>Portfolio</Link>
                <Link>Contact</Link>
            </div>
        </nav>
    )
}

export default Nav;



        // <div class="nav-bar">

        // </div>
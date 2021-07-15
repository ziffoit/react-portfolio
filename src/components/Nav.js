import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <div className="navbar-brand">Kevin Hanson</div>

                <Link className="nav-link active" aria-current="page" to="/about">
                    About
                </Link>

                <Link className="nav-link" to="/portfolio">
                    Portfolio
                </Link>

                <Link className="nav-link" to="/resume">
                    Resume
                </Link>
            </div>
        </nav>
    );
}

export default Nav;

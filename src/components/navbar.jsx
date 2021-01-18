import React from "react";
import { Link } from "react-router-dom";
import resume from "../assets/SantiagoMedinaResume.pdf";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      role="navigation"
    >
      <Link className="navbar-brand" to="/">
        SM
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href={resume} download>
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/santiagomed">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

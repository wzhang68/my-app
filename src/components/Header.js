import React from "react";
import "../components/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-custom">
        <div className="container">
          <a className="navbar-brand" href="/" id="welcome">
            <strong>Wei Zhang</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flew-grow-1 text-right header-menu"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto flex-nowrap">
              <li className="nav-item">
                <Link to="/my-app" className="nav-link m-2 menu-item">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/my-app/project" className="nav-link m-2 menu-item">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link m-2 menu-item"
                  target="_blank"
                  href="https://drive.google.com/file/d/1CKFYDN9XeL0ZZGGtW_q8VasHJgE5YpvB/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

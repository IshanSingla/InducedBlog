import React from "react";
export default function Navbar() {
  return (
    <nav className="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img height="50" src="https://telegra.ph/file/dff924bcc1144977cb0b5.png"/>
          <strong>Induced Official</strong>
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto d-flex align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="/languages">Languages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/compiler"> Compilers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/apis"> Apis </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/posts">Posts / News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about"> About  </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/docs"><span className="badge badge-secondary">docs</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


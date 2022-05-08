import React, { Component } from "react";

export class Navbar extends Component {
    render() {
        return (
                <nav className="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="./">
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
                        <div className="navbar-collapse collapse" id="navbarColor02" >
                            <ul className="navbar-nav mr-auto d-flex align-items-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="./">
                                        Languages<span className="sr-only"></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./article">
                                        Compilers
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./article">
                                        Projects
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./article">
                                        Apis
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./article">
                                        Posts / News
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./about">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./docs">
                                        InducedOfficial <span className="badge badge-secondary">docs</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        );
    }
}

export default Navbar;

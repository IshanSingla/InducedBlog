import React, { Component } from 'react'

export default class footer extends Component {
  render() {
    return (
        <div className="container mt-5">
            <footer className="bg-white border-top p-3 text-muted small">
                <div className="row align-items-center justify-content-between">
                    <div>
                        <span className="navbar-brand mr-2"><img height="35" src="https://telegra.ph/file/dff924bcc1144977cb0b5.png" alt='logo'/><strong>InducedOfficial</strong></span> Copyright © {new Date().getFullYear()}
                        . All rights reserved.
                    </div>
                    <div>
                        Made with <a className="text-secondary font-weight-bold" href="https://github.com/IshanSingla">❤️</a> by InducedOfficial
                    </div>
                </div>
            </footer>
        </div>
    )
  }
}

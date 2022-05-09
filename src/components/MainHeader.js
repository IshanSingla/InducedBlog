import React, { Component } from 'react'

export default class MainHeader extends Component {
  render() {
    return (
    <div className="container">
        <div className="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
            <div className="pl-4 pr-0 h-100 tofront">
                <div className="row justify-content-between">
                    <div className="col-md-6 pt-6 pb-6 align-self-center">
                        <h1 className="secondfont mb-3 font-weight-bold">InducedOfficial - Professional Devloper / Coder </h1>
                        <p className="mb-3">
                        Here we're introducing you what you can do with Coading Knowledge. Mostly works on Python. Projects Which made are basically Bots like: GitHub Bot, Telegram Bots, WebScraping, etc
                        </p>
                        <a href="/article" className="btn btn-dark">Read More</a>
                    </div>
                    <div className="col-md-6 d-none d-md-block pr-0"><img src="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg" className="shadow"/></div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

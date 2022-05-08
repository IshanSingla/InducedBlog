import React, { Component } from 'react'

export default class ReadNext extends Component {
  render() {
    return (
        <div className="container pt-4 pb-4">
        <h5 className="font-weight-bold spanborder"><span>Read next</span></h5>
        <div className="row">
            <div className="col-lg-6">
                <div className="card border-0 mb-4 box-shadow h-xl-300">
                <img height="140" src="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"/>
                    <div className="card-body px-0 pb-0 d-flex flex-column align-items-start">
                        <h2 className="h4 font-weight-bold">
                        <a className="text-dark" href="#">Brain Stimulation Relieves Depression Symptoms</a>
                        </h2>
                        <p className="card-text">
                            Researchers have found an effective target in the brain for electrical stimulation to improve mood in people suffering from depression.
                        </p>
                        <div>
                            <small className="d-block"><a className="text-muted" href="./author">Favid Rick</a></small>
                            <small className="text-muted">Dec 12 · 5 min read</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="flex-md-row mb-4 box-shadow h-xl-300">
                    <div className="mb-3 d-flex align-items-center">
                        <img height="80" src="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"/>
                        <div className="pl-3">
                            <h2 className="mb-2 h6 font-weight-bold">
                            <a className="text-dark" href="./article">Nasa's IceSat space laser makes height maps of Earth</a>
                            </h2>
                            <div className="card-text text-muted small">
                                Jake Bittle in LOVE/HATE
                            </div>
                            <small className="text-muted">Dec 12 · 5 min read</small>
                        </div>
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <img height="80" src="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"/>
                        <div className="pl-3">
                            <h2 className="mb-2 h6 font-weight-bold">
                            <a className="text-dark" href="./article">Underwater museum brings hope to Lake Titicaca</a>
                            </h2>
                            <div className="card-text text-muted small">
                                Jake Bittle in LOVE/HATE
                            </div>
                            <small className="text-muted">Dec 12 · 5 min read</small>
                        </div>
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <img height="80" src="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"/>
                        <div className="pl-3">
                            <h2 className="mb-2 h6 font-weight-bold">
                            <a className="text-dark" href="./article">Sun-skimming probe starts calling home</a>
                            </h2>
                            <div className="card-text text-muted small">
                                Jake Bittle in LOVE/HATE
                            </div>
                            <small className="text-muted">Dec 12 · 5 min read</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

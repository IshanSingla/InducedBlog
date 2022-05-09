import React, { Component } from 'react'

export default class NewReadNext extends Component {
  render() {
    return (
          <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-8">
                    <h5 className="font-weight-bold spanborder"><span>All Stories</span></h5>
                    <div className="mb-3 d-flex justify-content-between">
                        <div className="pr-3">
                            <h2 className="mb-1 h4 font-weight-bold">
                            <a className="text-dark" href="./article">Nearly 200 Great Barrier Reef coral species also live in the deep sea</a>
                            </h2>
                            <p>
                                There are more coral species lurking in the deep ocean that previously thought.
                            </p>
                            <div className="card-text text-muted small">
                                Jake Bittle in SCIENCE
                            </div>
                            <small className="text-muted">Dec 12 &middot; 5 min read</small>
                        </div>
                        <img height="120" src="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg" alt='blog image for display'/>
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        <div className="pr-3">
                            <h2 className="mb-1 h4 font-weight-bold">
                            <a className="text-dark" href="./article">East Antarctica's glaciers are stirring</a>
                            </h2>
                            <p>
                                Nasa says it has detected the first signs of significant melting in a swathe of glaciers in East Antarctica.
                            </p>
                            <div className="card-text text-muted small">
                                Jake Bittle in SCIENCE
                            </div>
                            <small className="text-muted">Dec 12 &middot; 5 min read</small>
                        </div>
                        <img height="120" src="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"/>
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        <div className="pr-3">
                            <h2 className="mb-1 h4 font-weight-bold">
                            <a className="text-dark" href="./article">50 years ago, armadillos hinted that DNA wasn’t destiny</a>
                            </h2>
                            <p>
                                Nasa says it has detected the first signs of significant melting in a swathe of glaciers in East Antarctica.
                            </p>
                            <div className="card-text text-muted small">
                                Jake Bittle in SCIENCE
                            </div>
                            <small className="text-muted">Dec 12 &middot; 5 min read</small>
                        </div>
                        <img height="120" src="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"/>
                    </div>
                </div>
                <div className="col-md-4 pl-4">
                    <h5 className="font-weight-bold spanborder"><span>Popular</span></h5>
                    <ol className="list-featured">
                        <li>
                        <span>
                        <h6 className="font-weight-bold">
                        <a href="./article" className="text-dark">Did Supernovae Kill Off Large Ocean Animals?</a>
                        </h6>
                        <p className="text-muted">
                            Jake Bittle in SCIENCE
                        </p>
                        </span>
                        </li>
                        <li>
                        <span>
                        <h6 className="font-weight-bold">
                        <a href="./article" className="text-dark">Humans Reversing Climate Clock: 50 Million Years</a>
                        </h6>
                        <p className="text-muted">
                            Jake Bittle in SCIENCE
                        </p>
                        </span>
                        </li>
                        <li>
                        <span>
                        <h6 className="font-weight-bold">
                        <a href="./article" className="text-dark">Unprecedented Views of the Birth of Planets</a>
                        </h6>
                        <p className="text-muted">
                            Jake Bittle in SCIENCE
                        </p>
                        </span>
                        </li>
                        <li>
                        <span>
                        <h6 className="font-weight-bold">
                        <a href="./article" className="text-dark">Effective New Target for Mood-Boosting Brain Stimulation Found</a>
                        </h6>
                        <p className="text-muted">
                            Jake Bittle in SCIENCE
                        </p>
                        </span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>

    )
  }
}

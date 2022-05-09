import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css"
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Posts from './components/Posts'
import ReadNext from './components/ReadNext'
import MainHeader from './components/MainHeader'
import NewReadNext from './components/NewReadNext'
import Compiler from './components/Compiler';
import Api from './components/Api';


export class App extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
}

  render() {
    return (
      <>
      <style></style>
        <Navbar/>
        <Router>
          <Routes>
            <Route exact path="/" element={<><MainHeader/><NewReadNext/></>} />
            <Route exact path="/posts" element={<><br/><NewReadNext/></>} />
            <Route exact path="/apis" element={<><br/><Api/></>} />
            <Route exact path="/article/:topicId" element={<><Posts/><ReadNext/></>} />
            <Route exact path="/compiler" element={<Compiler/>} />
          </Routes>
        </Router>
        <Footer/>
      </>     
    )
  }
}

export default App

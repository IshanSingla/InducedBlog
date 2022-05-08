import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css"
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Header from './components/Header'
import Posts from './components/Posts'
import ReadNext from './components/ReadNext'
import MainHeader from './components/MainHeader'
import NewReadNext from './components/NewReadNext'

export class App extends Component {
  render() {
    return (

      <>
      <style></style>
        <Navbar/>
        <Router>
          <Routes>
            <Route exact path="/" element={<><MainHeader/><NewReadNext/></>} />
            <Route exact path="/article" element={<><Header/><Posts/><ReadNext/></>} />
          </Routes>
        </Router>
        <Footer/>
      </>     
    )
  }
}

export default App

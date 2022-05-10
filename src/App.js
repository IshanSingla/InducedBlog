import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css"
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Posts, {Colector} from './components/Posts'
import Header, {MainHeader} from './components/Header';
import {ReadNext, NewReadNext} from './components/ReadNext'
import Compiler from './components/Compiler';
import Api from './components/Api';


export class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Router>
          <Routes>
            <Route exact path="/" element={<><MainHeader/><NewReadNext/><Colector key={"nfjnfdjndkkmn nimci "}/></>} />
            <Route exact path="/posts" element={<><br/><NewReadNext/></>} />
            <Route exact path="/apis" element={<><br/><Api/></>} />
            <Route exact path="/article/:id" element={<><Posts/><ReadNext/></>} />
            <Route exact path="/compiler" element={<Compiler/>} />
          </Routes>
        </Router>
        <Footer/>
      </>     
    )
  }
}

export default App

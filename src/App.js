import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"

import Navbar from './components/Navbar'
import Footer, {Footer1} from './components/footer'
import Posts, {Colector} from './components/Posts'
import {MainHeader} from './components/Header';
import {ReadNext, NewReadNext} from './components/ReadNext'
import Compiler from './components/Compiler';
import Api from './components/Api';
import Faqs from './components/Faqs';


export class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Router>
          <Routes>
            <Route exact path="/" element={<><MainHeader/><NewReadNext/><Colector key={"nfjnfdjndkkmn nimci "}/></>} />
            <Route exact path="/posts/:id" element={<><br/><NewReadNext/></>} />
            <Route exact path="/apis" element={<><br/><Api/></>} />
            <Route exact path="/about" element={<><br/><Faqs/></>} />
            <Route exact path="/article/:id" element={<><Posts/><ReadNext/></>} />
            <Route exact path="/compiler/:id" element={<Compiler/>} />
          </Routes>
        </Router>
        <div className="showish" >
           {/* eslint-disable-next-line */}
          <img className="rounded-circle" src='https://www.kindpng.com/picc/m/466-4662212_phone-headset-icon-support-png-phone-transparent-png.png' width={"70"}/>
          <div className="chat-popup">
          <form action="/" className="form-container">
            <h2>Support Chat</h2>
            <textarea placeholder="Type message.." name="msg" required></textarea>
            <button type="submit" className="btn">Send</button>
          </form>
        </div>
        </div>
        <Footer1/>
      </>     
    )
  }
}

export default App

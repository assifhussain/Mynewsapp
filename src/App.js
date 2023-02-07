import "./App.css";
import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

export default class App extends Component {
  pageSize=5;
  render() {
    return (
      <HashRouter>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<News pageSize={this.pageSize} country='in' category='general' key="home"/>}></Route>
        <Route exact path="/entertainment"  element={<News pageSize={this.pageSize} country='in' category='entertainment' key="entertainment"/>}></Route>
        <Route exact path="/science"  element={<News pageSize={this.pageSize} country='in' category='science' key="science"/>}></Route>
        <Route exact path="/business"  element={<News pageSize={this.pageSize} country='in' category='business' key="business"/>}></Route>
        <Route exact path="/health"  element={<News pageSize={this.pageSize} country='in' category='health' key="health"/>}></Route>
        <Route exact path="/general" element={<News pageSize={this.pageSize} country='in' category='general' key="general" />}></Route>
      
      </Routes>
    </HashRouter>
    )
  }
}










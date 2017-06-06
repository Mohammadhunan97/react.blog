import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;

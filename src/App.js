import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';



import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Footer from './components/Footer';

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route path="/"  component={Home} />
        <Route path="/" component={About} />
        <Route path='/' component={Skills} />
        <Route path="/" component={Portfolio} />
        <Route path="/" component={Contact} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

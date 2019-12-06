import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/home/'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Blog from './components/blog'
import Details from './components/blog/Details'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

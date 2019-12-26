import React from 'react';
import ComingSoon from './components/ComingSoon'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/home/'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Blog from './components/blog'
import Details from './components/blog/Details'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/article/details" component={Details} />
      <Route path="/maintenance" component={ComingSoon} />
      </Switch>
      <Footer /> 
    </div>
    </Router>
  );
}

export default App;

import React from 'react';
import Home from './pages/Home';
import Footer from './pages/Global/Footer';
import Header from './pages/Global/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import AllPosts from './pages/Blog';
import Advertise from './pages/Page/Advertise';
import Contact from './pages/Contact';
import Collaborate from './pages/Page/Collaborate';
import NotFound from './pages/Page/NotFound';
import Details from './pages/Blog/Details';
import ComingSoon from './pages/Page/ComingSoon';
import SubmitContents from './pages/Page/SubmitContents';
import Donate from './pages/Page/Donate';
import Audio from './pages/Audio';
import AudioDetails from './pages/Audio/AudioDetails';
import VideoDetails from './pages/Videos/VideoDetails';
import AllVideos from './pages/Videos';
import Privacy from './pages/Page/Privacy';
import Terms from './pages/Page/Terms';
import Legal from './pages/Page/Legal';
import Category from './pages/Blog/Category';
import DetailsTemp from './pages/Blog/Details-1';

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> 
      <Route path="/all-posts" component={AllPosts} />
      <Route path="/advertise" component={Advertise} />
      <Route path="/collaborate" component={Collaborate} /> 
      <Route path="/article/details" component={DetailsTemp} />
      <Route path="/article/:id" component={Details} />
      <Route path="/404" component={NotFound} />
      <Route path="/coming-soon" component={ComingSoon} />
      <Route path="/submit-contents" component={SubmitContents} />
      <Route path="/donate" component={Donate} />
      <Route path="/audio" component={Audio} />
      <Route path="/audio/details" component={AudioDetails} />
      <Route path="/videos" component={AllVideos} />
      <Route path="/video/:id" component={VideoDetails} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/legal" component={Legal} />
      <Route path="/category/:id" component={Category} />
      {/* <Route path="/terms" component={Terms} /> */}
      </Switch>
      <Footer /> 
    </div>
    </Router>

    );
}

export default App;

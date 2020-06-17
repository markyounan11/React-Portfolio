import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from '../About';
import Contact from '../../containers/Contact';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Portfolio from '../Portfolio';




const App = props => (
  <Router>
    <Navbar />
    <Route exact path="/" component={About}/>
    <Route exact path="/Contact" component={Contact}/>
    <Route exact path="/Portfolio" component={Portfolio}/>
    <Footer/>
  </Router>
);


export default App;
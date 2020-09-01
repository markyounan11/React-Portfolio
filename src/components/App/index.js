import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from '../About';
import Contact from '../../containers/Contact';
import Navigation from '../Navigation';
import Portfolio from '../Portfolio';




const App = props => (
  <Router>
    <Navigation />
    <Route exact path="/" component={About}/>
    <Route exact path="/Contact" component={Contact}/>
    <Route exact path="/Portfolio" component={Portfolio}/>
  </Router>
);


export default App;
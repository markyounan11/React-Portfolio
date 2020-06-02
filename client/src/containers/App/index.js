import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
//import NoMatch from "./pages/NoMatch";
 import Navbar from "../../components/navbar";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Switch>
          <Route exact path={["/", "/About"]}>
            <About/>
          </Route>

          <Route exact path="/Contact">
            <Contact/>
          </Route>

          <Route exact path="/Portfolio">
            <Portfolio/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

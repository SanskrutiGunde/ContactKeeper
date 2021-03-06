import React, { Fragment } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contactstate from "./context/contact/ContactState";
import "./App.css";

import Navbar from "./components/layout/Navbar.js";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <Contactstate>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Contactstate>
  );
};

export default App;

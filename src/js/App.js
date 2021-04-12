import React from "react";
import { Home } from "./views";
import { Navbar } from "./components";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="content-wrapper">
        <Navbar />
        <Switch>
          <Route path="/settings">
            <h1>I am Setting View</h1>
          </Route>
          <Route path="/login">
            <h1>I am Login View</h1>
          </Route>
          <Route path="/register">
            <h1>I am Register View</h1>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

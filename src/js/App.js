import React from "react";
import { Chat, Home, Login, Register, Settings } from "./views";
import { Navbar } from "./components";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="content-wrapper">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/chat/:id">
            <Chat />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

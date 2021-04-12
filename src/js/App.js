import React from "react";
import { Chat, Home, Login, Register, Settings } from "./views";
import { Navbar } from "./components";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "./store/index";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;

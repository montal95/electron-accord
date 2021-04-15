import React, { useEffect } from "react";
import { Chat, Home, Welcome, Settings } from "./views";
import { Navbar } from "./components";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "./store/index";
import { listenToAuthChanges } from "./actions/auth";

const store = configureStore();

const App = () => {
  useEffect(() => {
    store.dispatch(listenToAuthChanges());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="content-wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/chat/:id">
              <Chat />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

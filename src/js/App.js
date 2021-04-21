import React, { useEffect } from "react";
import { Chat, Home, Welcome, Settings } from "./views";
import { Navbar } from "./components";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { listenToAuthChanges } from "./actions/auth";
import StoreProvider from "./store/StoreProvider";
import { LoadingView } from "./components/shared/LoadingView";

const ContentWrapper = ({ children }) => (
  <div className="content-wrapper">{children}</div>
);

const ChatApp = () => {
  const dispatch = useDispatch();
  const isChecking = useSelector(({ auth }) => auth.isChecking);

  useEffect(() => {
    dispatch(listenToAuthChanges());
  }, []);

  return isChecking ? (
    <LoadingView />
  ) : (
    <Router>
      <ContentWrapper>
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
      </ContentWrapper>
    </Router>
  );
};

const App = () => {
  return (
    <StoreProvider>
      <ChatApp />
    </StoreProvider>
  );
};

export default App;

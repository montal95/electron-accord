import React, { useEffect } from "react";
import { Chat, Home, Welcome, Settings } from "./views";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { listenToAuthChanges } from "./actions/auth";
import { listenToConnectionChanges } from "./actions/app";
import StoreProvider from "./store/StoreProvider";
import { LoadingView } from "./components/shared/LoadingView";

const ContentWrapper = ({ children }) => (
  <div className="content-wrapper">{children}</div>
);

const AuthRoute = ({ children, ...rest }) => {
  const user = useSelector(({ auth }) => auth.user);
  const onlyChild = React.Children.only(children);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          React.cloneElement(onlyChild, { ...rest, ...props })
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const ChatApp = () => {
  const dispatch = useDispatch();
  const isChecking = useSelector(({ auth }) => auth.isChecking);
  const isOnline = useSelector(({ app }) => app.isOnline);

  useEffect(() => {
    const unsubFromAuth = dispatch(listenToAuthChanges());
    const unsubFromConnectionChanges = dispatch(listenToConnectionChanges());
    return () => {
      unsubFromAuth();
      unsubFromConnectionChanges();
    };
  }, [dispatch]);

  if(!isOnline) return <LoadingView message="Application has been disconnected from the internet. Please reconnect..." />

  return isChecking ? (
    <LoadingView />
  ) : (
    <Router>
      <ContentWrapper>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <AuthRoute path="/home">
            <Home />
          </AuthRoute>
          <AuthRoute path="/chat/:id">
            <Chat />
          </AuthRoute>
          <AuthRoute path="/settings">
            <Settings />
          </AuthRoute>
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

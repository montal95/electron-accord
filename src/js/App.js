import React from "react";
import { Home } from "./views";

const App = () => {
  const title = "Hello World";
  const enhancedTitle = title + " - Accord!";

  const sendNotification = () => {
    electron.notificationAPI.sendNotification("This message is like WOAH");
  };

  return (
    <Home />
  )
};

export default App;

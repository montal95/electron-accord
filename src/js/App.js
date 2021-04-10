import React from "react";

const App = () => {
  const title = "Hello World";
  const enhancedTitle = title + " - Accord!";

  const sendNotification = () => {
    electron.notificationAPI.sendNotification("This message is like WOAH");
  };

  return (
    <>
      <h1>{enhancedTitle}</h1>
      <button onClick={sendNotification}>Send Notification</button>
    </>
  );
};

export default App;

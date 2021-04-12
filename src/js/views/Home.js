import React, { useEffect } from "react";

import { AvailableChatsList, JoinedChatsList } from "../components";
import ViewTitle from "../components/shared/ViewTitle";

import { fetchChats } from "../api/chats";

export const Home = () => {
  useEffect(() => {
    fetchChats().then(chats => console.log(chats));
  }, []);

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChatsList />
      </div>
      <div className="col-9 fh">
        <ViewTitle text="Choose your channel" />
        <AvailableChatsList />
      </div>
    </div>
  );
};

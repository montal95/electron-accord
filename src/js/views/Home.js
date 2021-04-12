import React from "react";

import { AvailableChatsList, JoinedChatsList } from "../components";
import ViewTitle from "../components/shared/ViewTitle";

export const Home = () => {
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

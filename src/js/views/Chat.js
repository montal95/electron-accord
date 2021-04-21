import React from "react";
import { useParams } from "react-router-dom";

import BaseLayout from "../layouts/Base";
import { ChatMessagesList, ChatUsersList } from "../components";
import ViewTitle from "../components/shared/ViewTitle";

export const Chat = () => {
  const { id } = useParams();

  return (
    <BaseLayout canGoBack={true}>
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <ChatUsersList />
        </div>
        <div className="col-9 fh">
          <ViewTitle text={`Joined channel: ${id}`} />
          <ChatMessagesList />
        </div>
      </div>
    </BaseLayout>
  );
};

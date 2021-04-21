import React, { useEffect } from "react";

import { AvailableChatsList, JoinedChatsList } from "../components";
import ViewTitle from "../components/shared/ViewTitle";
import { useDispatch, useSelector } from "react-redux";

import { fetchChats } from "../actions/chats";
import { BaseLayout } from "../layouts/Base";
import Notification from "../utils/notifications";

export const Home = () => {
  const dispatch = useDispatch();
  const chats = useSelector(({ chats }) => chats.items);

  useEffect(() => {
    Notification.setup();
    dispatch(fetchChats());
  }, [dispatch]);

  return (
    <BaseLayout>
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <JoinedChatsList chats={chats} />
        </div>
        <div className="col-9 fh">
          <ViewTitle text="Choose your channel" />
          <AvailableChatsList chats={chats} />
        </div>
      </div>
    </BaseLayout>
  );
};

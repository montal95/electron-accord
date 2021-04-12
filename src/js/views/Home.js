import React from "react";

import { AvailableChats, JoinedChats, Navbar } from "../components";
import ViewTitle from "../components/shared/ViewTitle";

export const Home = () => {
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChats />
      </div>
      <div className="col-9 fh">
        <ViewTitle />
        <AvailableChats />
      </div>
    </div>
  );
};

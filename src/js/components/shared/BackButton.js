import React from "react";
import { useHistory } from "react-router-dom";

export const BackButton = () => {
  const history = useHistory();
  return (
    <button
      className="btn btn-outline-primary"
      onClick={() => history.goBack()}
    >
      Back
    </button>
  );
};

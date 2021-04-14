import React from "react";
import { LoginForm, RegisterForm } from "../components";

export const Welcome = () => {
  return (
    <div className="centered-view">
      <div className="centered-container">
        <LoginForm />
        <small className="form-text text-muted mt-2">
          Already registered?
          <span onClick={() => {}} className="btn-link ml-2">
            Login
          </span>
        </small>
      </div>
    </div>
  );
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../actions/auth";

export const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <button
            className="btn btn-outline-primary"
            onClick={() => history.goBack()}
          >
            Back
          </button>
          <Link to="/settings" className="btn btn-outline-success ml-2">
            Settings
          </Link>
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>
          {user ? (
            <button
              onClick={() => dispatch(logout())}
              className="btn btn-outline-danger ml-2"
            >
              Logout
            </button>
          ) : (
            <Link to="/" className="btn btn-outline-success ml-2">
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

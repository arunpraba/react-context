import React, { Component } from "react";
import { UserConsumer } from "../context/UserContext";

export default class Navbar extends Component {
  render() {
    return (
      <UserConsumer>
        {({ user, handleLogout }) => {
          return (
            <nav className="navbar navbar-light bg-light">
              <h1 className="navbar-brand">{user.email.toUpperCase()}</h1>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </nav>
          );
        }}
      </UserConsumer>
    );
  }
}

import React, { Component } from "react";

import MainPage from "./Components/MainPage";
import LoginPage from "./Components/LoginPage";
import UserContext from "./context/UserContext";

export default class App extends Component {
  state = {
    user: null
  };

  handleLogin = user => {
    this.setState({
      user
    });
  };

  handleLogout = () => {
    this.setState({
      user: null
    });
  };

  render() {
    const { user } = this.state;
    return (
      <UserContext.Provider
        value={{
          user,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout
        }}
      >
        {user ? <MainPage /> : <LoginPage />}
      </UserContext.Provider>
    );
  }
}

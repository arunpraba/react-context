import React, { Component } from "react";

import MainPage from "./Components/MainPage";
import LoginPage from "./Components/LoginPage";
import { UserProvider, UserConsumer } from "./context/UserContext";

export default class App extends Component {
  render() {
    return (
      <UserProvider>
        <UserConsumer>
          {({ user }) => (user ? <MainPage /> : <LoginPage />)}
        </UserConsumer>
      </UserProvider>
    );
  }
}

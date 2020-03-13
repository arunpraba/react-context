import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();

class UserProvider extends Component {
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
      <Provider
        value={{
          user,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { UserProvider, Consumer as UserConsumer };

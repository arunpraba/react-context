import React, { Component } from "react";
import { fetchEmail, randomTitle, randomMessage } from "../utils/random";

const { Provider, Consumer } = React.createContext();

export default class EmailProvider extends Component {
  state = {
    emails: [],
    currentEmail: null,
    error: null,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true, error: null });
    this.getEmail();
    this.clear = setInterval(() => {
      this.getEmail();
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.clear);
  }

  getEmail = () => {
    const promise = fetchEmail();
    promise
      .then(() => {
        this.setState(state => ({
          loading: false,
          emails: [
            {
              id: Date.now(),
              title: randomTitle(),
              email: randomMessage(),
              date: new Date().toDateString()
            },
            ...state.emails
          ]
        }));
      })
      .catch(error => {
        this.setState({
          loading: false,
          error
        });
      });
  };

  handleSelectEmail = currentEmail => {
    this.setState({ currentEmail });
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          handleSelectEmail: this.handleSelectEmail
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { EmailProvider, Consumer as EmailConsumer };

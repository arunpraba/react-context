import React, { Component } from "react";
import UserContext from "../context/UserContext";

export default class Email extends Component {
  state = {
    lists: [
      {
        id: 1,
        count: 10,
        text: "Cras justo odio"
      },
      {
        id: 2,
        count: 20,
        text: "Dapibus ac facilisis in"
      },
      {
        id: 3,
        count: 30,
        text: "Morbi leo risus"
      },
      {
        id: 4,
        count: 40,
        text: "Acdc facilisis in Dapibus"
      }
    ]
  };

  handleLogin = user => {
    this.setState({
      user
    });
  };

  render() {
    const { lists } = this.state;

    return (
      <UserContext.Consumer>
        {({ user }) => (
          <div className="container">
            <div className="row justify-content-center mt-1">
              <div className="col-8">
                <h1 className="text-center text-primary">
                  welcome {user.email.toUpperCase()}... 💐
                </h1>
              </div>
            </div>
            <div className="row justify-content-center my-5">
              <div className="col-8">
                <ul className="list-group">
                  {lists.map(list => (
                    <li
                      key={list.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {list.text}
                      <span className="badge badge-primary badge-pill">
                        {list.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

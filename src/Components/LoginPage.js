import React, { Component } from "react";
import UserContext from "../context/UserContext";

class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = (e, handleLogin) => {
    e.preventDefault();
    const { email, password } = this.state;

    if (email && password) {
      handleLogin({ email, password });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <UserContext.Consumer>
        {({ handleLogin }) => (
          <div className="container">
            <div className="row justify-content-center my-5">
              <div className="col-4">
                <h1 className="text-center">Login</h1>
                <form onSubmit={e => this.handleSubmit(e, handleLogin)}>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default LoginPage;

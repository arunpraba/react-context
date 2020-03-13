import React, { Component } from "react";
import { UserConsumer } from "../context/UserContext";

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
      <UserConsumer>
        {({ handleLogin }) => (
          <div className="container">
            <div className="row justify-content-center my-5">
              <div className=" col-md-4 col-sm-12 card shadow-sm p-3 mb-5 bg-white rounded">
                <h1 className="text-center">Login</h1>
                <small className="form-text text-center text-muted">
                  It accepts any email and password
                </small>
                <form
                  className="mt-3"
                  onSubmit={e => this.handleSubmit(e, handleLogin)}
                >
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
      </UserConsumer>
    );
  }
}

export default LoginPage;

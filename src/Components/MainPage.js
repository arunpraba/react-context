import React, { Component } from "react";
import Email from "./Email";
import Navbar from "./Navbar";

export default class MainPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Email />
      </>
    );
  }
}

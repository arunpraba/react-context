import React, { Component } from "react";
import Email from "./Email";
import Navbar from "./Navbar";
import { EmailProvider } from "../context/EmailContext";

export default class MainPage extends Component {
  render() {
    return (
      <EmailProvider>
        <Navbar />
        <Email />
      </EmailProvider>
    );
  }
}

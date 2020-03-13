import React, { Component } from "react";

import { EmailConsumer } from "../context/EmailContext";

export default class Email extends Component {
  render() {
    return (
      <EmailConsumer>
        {({ emails, currentEmail, handleSelectEmail }) => {
          return (
            <div className="row">
              <div
                className="col-4 border-right overflow-auto"
                style={{ height: "80vh", paddingRight: 0 }}
              >
                <h5 className="text-primary text-center my-1">Inbox</h5>
                <div className="list-group">
                  {emails.map(({ id, title, email, date }) => (
                    <button
                      key={id}
                      onClick={() =>
                        handleSelectEmail({ id, title, email, date })
                      }
                      className={`list-group-item list-group-item-action p-2 border-left-0 border-top-0 border-right-0 ${
                        currentEmail && currentEmail.id === id ? "active" : ""
                      }`}
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{title}</h5>
                        <small>{date}</small>
                      </div>
                      <p className="text-truncate">{email}</p>
                    </button>
                  ))}
                </div>
              </div>
              {currentEmail && (
                <div className="col-8">
                  <h1 className="1">{currentEmail.title}</h1>
                  <small>{currentEmail.date}</small>
                  <hr />
                  <p>{currentEmail.email}</p>
                </div>
              )}
            </div>
          );
        }}
      </EmailConsumer>
    );
  }
}

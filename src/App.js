// src/App.js

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Debits from "./components/Debits";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        userName: "bob loblaw",
        memberSince: "08/23/99",
        accountBalance: 14568.27,
        debits: {},
      },
    };
    this.mockLogIn = this.mockLogIn.bind(this);
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };

  render() {
    const HomeComponent = () => (
      <Home accountBalance={this.state.currentUser.accountBalance} />
    );
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );
    const LoginComponent = () => (
      <Login
        user={this.state.currentUser.debits}
        mockLogIn={this.mockLogIn}
        {...this.props}
      />
    );

    const DebitsComponent = () => (
      <Debits
        debits={this.state.currentUser.debits}
        user={this.state.currentUser}
        accountBalance={this.state.currentUser.accountBalance}
      />
    );

    return (
      // You must use render if you want to pass a component with attributes.
      // Otherwise you can use component={}
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LoginComponent} />
          <Route exact path="/debits" render={DebitsComponent} />
        </div>
      </Router>
    );
  }
}

export default App;

// src/components/Debit.js

import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  } // END CONSTRUCTOR

  render() {
    return (
      <div>
        <title>Debits</title>
        <h1>Debits</h1>
        <h2>
          My Account Balance is:{" "}
          <AccountBalance accountBalance={this.props.accountBalance} />
        </h2>
      </div>
    ); // END RETURN
  } // END RENDER
} // END DEBITS CLASS

export default Debits;

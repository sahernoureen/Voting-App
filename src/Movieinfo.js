import React, { Component } from "react";
import Countvote from "./Countvote";

export default class Movieinfo extends Component {
  constructor(props) {
    super(props);
  }

  IncrementItem = () => {
    this.setState({ count: 0 });
  };

  render() {
    return <div></div>;
  }
}

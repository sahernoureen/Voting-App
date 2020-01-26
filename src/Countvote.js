import React, { Component } from "react";

export default class Countvote extends Component {
  constructor(props) {
    super(props);
    this.state = props.movieCount;
  }

  render() {
    return <div>{this.state}</div>;
  }
}

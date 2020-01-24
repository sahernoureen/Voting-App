import React, { Component } from "react";
import Countvote from "./Countvote";
import Linktomovie from "./Linktomovie";
import Movieinfo from "./Movieinfo";

export default class AlbumsContainer extends Component {
  render() {
    return (
      <div>
        <Countvote />
        <Linktomovie />
        <Movieinfo />
      </div>
    );
  }
}

import React, { Component } from "react";
import styles from "./Styles.css";

export default class Movieinfo extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = props.movie;
  }

  IncrementCount = () => {};

  render() {
    return (
      <div class="flex-container">
        <div class="imageContain">
          {" "}
          <img src={this.state.movieImage} alt="" />{" "}
        </div>
        <div class="Msgcontain">
          <div>
            <p></p>
          </div>
          <button>Like</button> <b>{this.state.count} </b>
          <p></p>
          <div>{this.state.name}</div>
          <div>
            {this.state.producedBy} , {this.state.yearOfRelease}
          </div>
          <div class="imageAdded">
            {" "}
            Submitted By : <img src={this.state.addedBy} alt="" />{" "}
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./Styles.css";

export default class Movieinfo extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = props.movie;
  }

  IncrementCount = () => {
    this.setState(
      { count: this.state.count + 1 },
      this.props.trackcount(this.state.id)
    );
  };

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
          <button onClick={this.IncrementCount}>Like</button>{" "}
          <b>{this.state.count} </b>
          <p></p>
          <div>
            <a target="_blank" href={this.state.videoLink}>
              {this.state.name}
            </a>
          </div>
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

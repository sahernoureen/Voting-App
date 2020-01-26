import React, { Component } from "react";
import Countvote from "./Countvote";
import Linktomovie from "./Linktomovie";
import Movieinfo from "./Movieinfo";

const movies = [
  {
    movieImage: require("./forty.jpg"),
    name: "Forty Rules of love",
    producedBy: "Abcd",
    yearOfRelease: "02:10:31",
    addedBy: "saher",
    userImage: "",
    count: 4
  },

  {
    movieImage: require("./dino.jpg"),
    name: "Good Dinosaur",
    producedBy: "Abdsscd",
    yearOfRelease: "02:10:31",
    addedBy: "saher noureen",
    userImage: "",
    count: 2
  },

  {
    movieImage: require("./trans.jpg"),
    name: "Transporter",
    producedBy: "sfsfs",
    yearOfRelease: "02:10:31",
    addedBy: "saher noureen",
    userImage: "",
    count: 10
  },
  {
    movieImage: require("./choclate.jpg"),
    name: "Charlie and Chocolate Factory",
    producedBy: "sfsfs",
    yearOfRelease: "02:10:31",
    addedBy: "saher noureen",
    userImage: "",
    count: 3
  }
];

export default class AlbumsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies
    };
  }

  render() {
    return <div></div>;
  }
}

//   <Linktomovie movies={this.state.movies} />
//   <Movieinfo movies={this.state.movies} onClick={this.IncrementItem} />

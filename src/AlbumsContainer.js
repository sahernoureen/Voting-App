import React, { Component } from "react";
import Movieinfo from "./Movieinfo";
import styles from "./Styles.css";

const movies = [
  {
    id: 1,
    movieImage: require("./forty.jpg"),
    videoLink: "https://www.youtube.com/watch?v=vQlNQrhmEQE",
    name: "Forty Rules of love",
    producedBy: "Abcd",
    yearOfRelease: "March, 2009",
    addedBy: require("./pic1.jpg"),
    count: 10
  },

  {
    id: 2,
    movieImage: require("./dino.jpg"),
    videoLink: "https://www.youtube.com/watch?v=keYrDoZSxDQ",
    name: "Good Dinosaur",
    producedBy: "walt Disney Production",
    yearOfRelease: "November, 2015",
    addedBy: require("./pic1.jpg"),
    count: 6
  },

  {
    id: 3,
    movieImage: require("./trans.jpg"),
    name: "The Transporter",
    videoLink: "https://www.youtube.com/watch?v=Xt9x_IFOxrQ",
    producedBy: "Luc Besson",
    yearOfRelease: "August, 2015",
    addedBy: require("./pic2.jpg"),
    userImage: "",
    count: 5
  },
  {
    id: 4,
    movieImage: require("./choclate.jpg"),
    videoLink:
      "https://www.youtube.com/watch?v=791CWHOkekg&list=PLZ-F4pjbka7EIKKAwh83RDqi7Vp0q_DQp",
    name: "Charlie and Chocolate Factory",
    producedBy: "Tim Burton",
    yearOfRelease: "July, 2005",
    addedBy: require("./pic2.jpg"),
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
  updateMoviecount = id => {};
  render() {
    let movieslist = this.state.movies.map(movie => (
      <div key={movie.id}>
        <Movieinfo movie={movie} trackcount={this.updateMoviecount} />
      </div>
    ));

    return <div>{movieslist}</div>;
  }
}
